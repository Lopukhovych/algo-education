from typing import List

class Solution:
    def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1
        max_height = 0

        while left < right:
            min_height = min(height[left], height[right])
            max_height = max(max_height, min_height * (right - left))

            if height[left] < height[right]:
                left += 1
            else:
                right -=1

        return max_height

sol = Solution()

# heights = [1,8,6,2,5,4,8,3,7] # 49
heights = [1,1] #1
print(f'sol: {sol.maxArea(heights)}')
