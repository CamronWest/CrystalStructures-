def removeElement(nums,val):
        
        count = 0 
        while val in nums:
            nums.remove(val)  
        for i in range(len(nums)):
            if nums[i] != val:
                nums[count] = nums[i]
                count +=1
        return count