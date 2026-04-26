class Solution {
    public int reverse(int x) {
        
        int temp = 0, digit =0, result=0;
        while (x!=0){
            digit = x%10;
            temp = result *10+digit;
            x/=10;
            if(temp/10!=result){
                return 0;
            }
            result = temp;
        }
        return result;
    } 
    
}