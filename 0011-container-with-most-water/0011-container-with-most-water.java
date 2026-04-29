class Solution {
    public int maxArea(int[] height) {
    int first=0,second=height.length-1;
    int max=Integer.MIN_VALUE;
    while(first<second) {
        int val=Math.min(height[first], height[second]);
        max=Math.max(val*(second-first),max);
        if(height[first]>height[second])
        second--;
        else
        first++;
    }
    return max;
    }
}