class Solution {
    public int findDuplicate(int[] nums) {
        int []map=new int[nums.length];
        for(int i:nums){
            map[i-1]++;
        }
         for(int i=0;i<nums.length;i++){
            if(map[i]>1)
                return i+1;
        }
        return nums[nums.length-1];
    }
}

