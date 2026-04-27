class Solution {
    public int lengthOfLastWord(String s) {
        if(s.trim().isEmpty())
            return 0;
         else{
           String str[]=s.split(" ");
           String str2=str[str.length-1];
          return str2.length();
       }
    }
}