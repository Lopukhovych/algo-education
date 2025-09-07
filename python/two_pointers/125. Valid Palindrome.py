class Solution:
    def validPalindrome(self, s: str) -> bool:
        def check_palindrome(s, left, right):
            while left < right:
                if s[left] != s[right]:
                    return False
                left += 1
                right -=1
            return True

        left, right = 0, len(s) - 1
        while left < right:
            if s[left] != s[right]:
                return check_palindrome(s, left + 1, right) or check_palindrome(s, left, right - 1)

            left += 1
            right -= 1
        return True
