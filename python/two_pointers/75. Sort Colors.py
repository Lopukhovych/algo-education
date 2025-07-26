from typing import List


class Solution:
    def sortColors(self, nums: List[int]):
        red = curr = 0
        blue = len(nums) - 1

        while curr <= blue:
            if nums[curr] == 0:
                nums[red], nums[curr] = nums[curr], nums[red]
                red += 1
                curr += 1
            elif nums[curr] == 2:
                nums[curr], nums[blue] = nums[blue], nums[curr]
                blue -= 1
            else:
                curr += 1


# nums = [2,0,2,1,1,0]
# nums = [2,0,1]
nums = [1, 2, 0]
sol = Solution()
sol.sortColors(nums)
print(f'nums: {nums}')
