class Solution:
    def nearestPalindromic(self, n: str) -> str:
        lenn = len(n)
        num = int(n)
        if lenn % 2 == 0:
            cand1 = n[:len(n) // 2] + n[:len(n) // 2][::-1]
            cand2 = str(int(n[:len(n) // 2]) + 1) + str(int(n[:len(n) // 2]) + 1)[::-1]
            cand3 = str(int(n[:len(n) // 2]) - 1) + str(int(n[:len(n) // 2]) - 1)[::-1]
        else:
            cand1 = n[:len(n) // 2 + 1] + n[:len(n) // 2][::-1]
            cand2 = str(int(n[:len(n) // 2 + 1]) + 1) + str(int(n[:len(n) // 2 + 1]) + 1)[::-1][1:]
            cand3 = str(int(n[:len(n) // 2 + 1]) - 1) + str(int(n[:len(n) // 2 + 1]) - 1)[::-1][1:]
        cand4 = 10 ** (len(n) - 1) - 1
        cand5 = 10 ** len(n) + 1
        cands = (int(cand1), int(cand2), int(cand3), cand4, cand5)

        res = 0
        diff = float('inf')

        for c in cands:
            if c == int(n):
                continue
            if abs(c - num) < diff:
                diff = abs(c - num)
                res = c
            elif abs(c - num) == diff:
                res = min(res, c)

        return str(res)


sol = Solution()
print(sol.nearestPalindromic("1000") == "999")  # 999
print(sol.nearestPalindromic("1200") == "1221")  # 1221
print(sol.nearestPalindromic("1221") == "1111")  # 1111
print(sol.nearestPalindromic("999") == "1001")  # 1001
print(sol.nearestPalindromic("123") == "121")  # 121
