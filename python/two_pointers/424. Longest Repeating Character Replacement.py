from collections import defaultdict

class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        arr = defaultdict(int)
        res = 0
        l = 0
        for r in range(len(s)):
            arr[s[r]] += 1
            while r - l + 1 - max(arr.values()) > k:
                arr[s[l]] -= 1
                l += 1
            res = max(res, r - l + 1)
        return res


sol = Solution()

# s = "ABAB" #4
# k = 2
s = "AABABBA" #4
k = 1
# s = "BBABCCDD" #5
# k = 2

print(f'sol.c: {sol.characterReplacement(s, k)}')
