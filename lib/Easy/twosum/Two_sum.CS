public class Solution {
    public int[] TwoSum(int[] nums, int target){
        Dictionary<int,int> intStore = new Dictionary<int, int>();
        for(int i=0; i<nums.length; i++){
            if(intStore.ContainsKey(target-nums[i])){
                return new int[] {intStore[target-nums[i]],i};
            } else [
                intStore[nums[i]] = i;

            ]
        }
        return null;
    }
}