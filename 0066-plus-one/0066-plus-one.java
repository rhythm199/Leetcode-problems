class Solution {
    public int[] plusOne(int[] digits) {
        int n=digits.length;
        int i=0;
        for(i=n-1;i>=0;i--)
        {   
            if(digits[i]<9){
                digits[i]=digits[i]+1;
                return digits;}
            else
                digits[i]=0;
        }
        int []a=new int[n+1];
        a[0]=1;
        return a;
    }
}