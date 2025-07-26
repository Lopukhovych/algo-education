from typing import List


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        res = []
        for i in range(0, len(nums)):
            if nums[i] > 0:
                break
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            left = i + 1
            right = len(nums) - 1
            while left < right:
                _sum = nums[i] + nums[left] + nums[right]
                if _sum == 0:
                    res.append([nums[i], nums[left], nums[right]])
                    left += 1
                    right -= 1
                    while left < right and nums[left] == nums[left - 1]:
                        left += 1
                elif _sum < 0:
                    left += 1
                else:
                    right -= 1
        return res


sol = Solution()

# nums = [-1, 0, 1, 2, -1, -4]  # [[-1,-1,2],[-1,0,1]]
nums = [0,1,1] # []
# nums = [0,0,0] # [[0, 0, 0]]
print(f'sol: {sol.threeSum(nums)}')
