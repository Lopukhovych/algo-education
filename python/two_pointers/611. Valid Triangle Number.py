from typing import List


class Solution:
    def triangleNumber(self, nums: List[int]) -> int:
        if len(nums) < 3:
            return 0
        nums.sort()
        result = 0
        for i in range(0, len(nums)):
            if nums[i] == 0:
                continue
            k = i + 2
            for j in range(i + 1, len(nums) - 1):
                while(k < len(nums) and nums[i] + nums[j] > nums[k]):
                    k += 1
                result += k - j - 1
        return result
    # def triangleNumber(nums):
    #     nums.sort()
    #
    # count = 0
    # for i in range(len(nums) - 1, 1, -1):
    #     left = 0
    #     right = i - 1
    #     while left < right:
    #         if nums[left] + nums[right] > nums[i]:
    #             count += right - left
    #             right -= 1
    #         else:
    #             left += 1
    #
    # return count
