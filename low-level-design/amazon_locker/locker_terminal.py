from typing import List
from Compartment import Compartment
from Locker import Locker
from utils.size import Size


class LockerTerminal:
    def __init__(self, locker: Locker):
        self.locker = locker
        self.running = True

    def start(self):
        """Start the terminal application"""
        self.print_welcome()

        while self.running:
            self.print_menu()
            choice = input("\nEnter your choice: ").strip()
            self.handle_choice(choice)

    def print_welcome(self):
        """Print welcome banner"""
        print("\n" + "=" * 50)
        print("AWS LOCKER TERMINAL".center(50))
        print("=" * 50)

    def print_menu(self):
        """Display main menu"""
        print("\n" + "-" * 50)
        print("MAIN MENU")
        print("-" * 50)
        print("1. Deposit Package")
        print("2. Pickup Package")
        print("3. Open Expired Compartments")
        print("4. View Locker Status")
        print("5. Exit")
        print("-" * 50)

    def handle_choice(self, choice: str):
        """Handle user menu selection"""
        actions = {
            '1': self.deposit_package,
            '2': self.pickup_package,
            '3': self.open_expired_compartments,
            '4': self.view_status,
            '5': self.exit_app
        }

        action = actions.get(choice)
        if action:
            action()
        else:
            print("\n❌ Invalid choice. Please select 1-5.")

    def deposit_package(self):
        """Handle package deposit"""
        print("\n" + "=" * 50)
        print("DEPOSIT PACKAGE")
        print("=" * 50)

        print("\nAvailable sizes:")
        print("1. Small")
        print("2. Medium")
        print("3. Large")

        size_choice = input("\nSelect package size (1-3): ").strip()

        size_map = {
            '1': Size.SMALL,
            '2': Size.MEDIUM,
            '3': Size.LARGE
        }

        size = size_map.get(size_choice)

        if not size:
            print("\n❌ Invalid size selection.")
            return

        try:
            access_code = self.locker.deposit_package(size)
            print("\n✅ Package deposited successfully!")
            print(f"\n{'*' * 50}")
            print(f"ACCESS CODE: {access_code}")
            print(f"{'*' * 50}")
            print("\n⚠️  Please save this code. You will need it to pickup your package.")
            print("⚠️  This code expires in 7 days.")

        except Exception as e:
            print(f"\n❌ Error: {str(e)}")

    def pickup_package(self):
        """Handle package pickup"""
        print("\n" + "=" * 50)
        print("PICKUP PACKAGE")
        print("=" * 50)

        access_code = input("\nEnter your access code: ").strip()

        if not access_code:
            print("\n❌ Access code cannot be empty.")
            return

        try:
            self.locker.pickup(access_code)
            print("\n✅ Compartment opened successfully!")
            print("📦 Please retrieve your package.")
            print("🚪 The compartment will close automatically.")

        except Exception as e:
            print(f"\n❌ Error: {str(e)}")

    def open_expired_compartments(self):
        """Open all expired compartments"""
        print("\n" + "=" * 50)
        print("OPEN EXPIRED COMPARTMENTS")
        print("=" * 50)

        confirm = input("\nThis will open all expired compartments. Continue? (y/n): ").strip().lower()

        if confirm != 'y':
            print("\n❌ Operation cancelled.")
            return

        try:
            self.locker.open_expired_compartments()
            print("\n✅ All expired compartments have been opened.")

        except Exception as e:
            print(f"\n❌ Error: {str(e)}")

    def view_status(self):
        """Display locker status"""
        print("\n" + "=" * 50)
        print("LOCKER STATUS")
        print("=" * 50)

        # Count compartments by size and status
        total_compartments = len(self.locker.compartments)
        available_count = sum(1 for c in self.locker.compartments if c.is_available())
        occupied_count = total_compartments - available_count

        size_counts = {
            Size.SMALL: {'total': 0, 'available': 0},
            Size.MEDIUM: {'total': 0, 'available': 0},
            Size.LARGE: {'total': 0, 'available': 0}
        }

        for compartment in self.locker.compartments:
            size = compartment.get_size()
            size_counts[size]['total'] += 1
            if compartment.is_available():
                size_counts[size]['available'] += 1

        print(f"\nTotal Compartments: {total_compartments}")
        print(f"Available: {available_count}")
        print(f"Occupied: {occupied_count}")
        print(f"Active Tokens: {len(self.locker.access_tokens)}")

        print("\n" + "-" * 50)
        print("Compartment Breakdown:")
        print("-" * 50)

        for size in [Size.SMALL, Size.MEDIUM, Size.LARGE]:
            total = size_counts[size]['total']
            available = size_counts[size]['available']
            occupied = total - available
            size_name = size.name.capitalize()

            print(f"\n{size_name}:")
            print(f"  Total: {total}")
            print(f"  Available: {available}")
            print(f"  Occupied: {occupied}")

    def exit_app(self):
        """Exit the application"""
        print("\n" + "=" * 50)
        print("Thank you for using AWS Locker Terminal!")
        print("=" * 50 + "\n")
        self.running = False


def initialize_locker() -> Locker:
    """Initialize a locker with sample compartments"""
    compartments: List[Compartment] = []

    # Create sample compartments - adjust as needed
    # 10 small, 5 medium, 3 large
    for i in range(10):
        compartments.append(Compartment(Size.SMALL))

    for i in range(5):
        compartments.append(Compartment(Size.MEDIUM))

    for i in range(3):
        compartments.append(Compartment(Size.LARGE))

    return Locker(compartments, {})

