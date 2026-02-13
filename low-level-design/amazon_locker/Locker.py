import random
from collections import defaultdict
from typing import List, Dict
from datetime import datetime, timedelta
import uuid


from AccessToken import AccessToken
from Compartment import Compartment
from utils.size import Size


class Locker:
    def __init__(self, compartments: List[Compartment], access_tokens: Dict[str, AccessToken]):
        self.compartments = compartments
        self.access_tokens = access_tokens
        self.reservations: Dict[str, Compartment] = defaultdict()

    def deposit_package(self, size: Size):
        compartment = self._get_available_compartment(size)
        if compartment is None:
            raise Exception(f"No available compartment of size {size}")

        compartment.open()
        compartment.mark_occupied()
        access_token = self._generate_access_token(compartment)
        self.access_tokens[access_token.get_code()] = access_token

        return access_token.get_code()

    # Split deposit_package into 2 operations
    # def reserve_compartment(self, size: Size):
    #     compartment = self._get_available_compartment(size)
    #     if compartment is None:
    #         raise Exception(f"No available compartment of size {size}")
    #     compartment.mark_reserved()
    #     compartment.open()
    #     reservation_id = self._generate_reservation_id()
    #     self.reservations[reservation_id] = compartment
    #     pass
    #
    #
    # def confirm_deposit(self, reservation_id: str):
    #     if reservation_id not in self.reservations:
    #         raise Exception("No available compartment")
    #     compartment = self.reservations[reservation_id]
    #     if not compartment:
    #         raise Exception("No available compartment")
    #
    #     compartment.mark_occupied()
    #     access_token = self._generate_access_token(compartment)
    #     self.access_tokens[access_token.get_code()] = access_token
    #     del self.reservations[reservation_id]
    #
    #     return access_token.get_code()

    def pickup(self, token_code: str) -> None:
        if not token_code:
            raise Exception("Invalid access token code")

        access_token = self.access_tokens.get(token_code)

        if access_token is None:
            raise Exception("Invalid access token code")

        if access_token.is_expired():
            raise Exception("Access token has expired")

        compartment = access_token.get_compartment()
        compartment.open()

        self._clear_deposit(access_token)

    def open_expired_compartments(self):
        for access_token in self.access_tokens.values():
            if access_token.is_expired():
                compartment = access_token.get_compartment()
                compartment.open()

    def _get_available_compartment(self, requested_size: Size):
        size_in_order = [Size.SMALL, Size.MEDIUM, Size.LARGE]
        start_index = size_in_order.index(requested_size)
        for i in range(start_index, len(size_in_order)):
            size = size_in_order[i]
            for compartment in self.compartments:
                if compartment.get_size() == size and compartment.is_available():
                    return compartment
        return None

    def _generate_access_token(self, compartment: Compartment) -> AccessToken:
        code = f"{random.randint(0, 999999):06d}"
        expiration = datetime.now() + timedelta(days=7)

        return AccessToken(code, expiration, compartment)

    def _clear_deposit(self, access_token: AccessToken):
        compartment = access_token.get_compartment()
        compartment.mark_available()
        self.access_tokens.pop(access_token.get_code(), None)

    def _generate_reservation_id(self):
        return str(uuid.uuid4())
