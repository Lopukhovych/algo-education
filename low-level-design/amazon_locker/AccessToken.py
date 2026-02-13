from datetime import datetime


class AccessToken:
    def __init__(self, code: str, expiration: datetime, compartment):
        self.compartment = compartment
        self.expiration = expiration
        self.code = code

    def is_expired(self) -> bool:
        return datetime.now() >= self.expiration

    def get_compartment(self):
        return self.compartment

    def get_code(self) -> str:
        return self.code
