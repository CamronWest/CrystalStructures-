## Solution contains big 0 notaion 0(n);
class solution(object):
    def twoSum(self,nums,target):
        seen = {}

        for i in range(len(nums)):
            diff = target - nums[i]
            if diff in seen:
                return [seen[diff],1]
            else:
                seen[nums[i]] = i
