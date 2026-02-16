# Given number n, find nearest greater palindrome

def next_palindrome(n: int) -> int:
    s = str(n + 1)
    length = len(s)
    mid = length // 2

    left = s[:(length + 1) // 2]
    candidate = left + left[:mid][::-1]

    if int(candidate) > n:
        return int(candidate)

    # increment left side
    left_inc = str(int(left) + 1)

    # Case 99 -> 101
    if len(left_inc) > len(left):
        return int("1" + "0" * (length - 1) + "1")

    return int(left_inc + left_inc[:mid][::-1])


print(next_palindrome(1000))  # 1001
print(next_palindrome(1200))  # 1221
print(next_palindrome(1221))  # 1331
print(next_palindrome(999))   # 1001
print(next_palindrome(123))   # 131
