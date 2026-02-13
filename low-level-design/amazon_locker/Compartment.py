from utils.compartment_status import CompartmentStatus


class Compartment:
    def __init__(self, size):
        self.size = size
        self.status = CompartmentStatus.AVAILABLE

    def is_available(self):
        return self.status == CompartmentStatus.AVAILABLE

    def is_occupied(self):
        return self.status == CompartmentStatus.OCCUPIED

    def get_size(self):
        return self.size

    def mark_occupied(self):
        self.status = CompartmentStatus.OCCUPIED

    def mark_available(self):
        self.status = CompartmentStatus.AVAILABLE

    def mark_out_of_service(self):
        self.status = CompartmentStatus.OUT_OF_SERVICE

    def mark_reserved(self):
        self.status = CompartmentStatus.RESERVED

    def open(self):
        pass
