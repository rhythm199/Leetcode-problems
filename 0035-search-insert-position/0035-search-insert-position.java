class Solution {
    public int searchInsert(int[] nums, int target) {
        int i;
        int f=0;
        for(i=0;i<nums.length;i++){
            if(nums[i]==target)
                return i;
            else if(target<nums[i])
                return i;
        }
        return nums.length;
    }
}