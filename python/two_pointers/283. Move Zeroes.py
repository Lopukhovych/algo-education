from typing import List


class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        # new = [x for x in nums if x != 0]
        # for i in range(0, len(nums)):
        #     if i < len(new):
        #         nums[i] = new[i]
        #     else:
        #         nums[i] = 0

        left = 0
        for right in range(len(nums)):
            if nums[right] != 0:
                nums[left], nums[right] = nums[right], nums[left]
                left += 1

