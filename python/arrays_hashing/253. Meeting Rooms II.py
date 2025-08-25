import heapq
from typing import List


class Solution:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        if not intervals:
            return 0
        intervals.sort(key=lambda x: x[0])
        rooms = []
        heapq.heappush(rooms, intervals[0][1])

        for interval in intervals[1:]:
            if rooms[0] <= interval[0]:
                heapq.heappop(rooms)

            heapq.heappush(rooms, interval[1])

        return len(rooms)

# Test
# intervals = [[0,30],[5,10],[15,20]] # 2
intervals = [[7,10],[2,4]] # 1

sol = Solution()
print(f'minMeetingRooms: {sol.minMeetingRooms(intervals)}')
