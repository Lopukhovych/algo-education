# locker_terminal.py
import sys
from locker_terminal import initialize_locker, LockerTerminal


def main():
    """Main entry point"""
    try:
        locker = initialize_locker()
        terminal = LockerTerminal(locker)
        terminal.start()
    except KeyboardInterrupt:
        print("\n\n⚠️  Application interrupted by user.")
        sys.exit(0)
    except Exception as e:
        print(f"\n❌ Fatal error: {str(e)}")
        sys.exit(1)


if __name__ == "__main__":
    main()
