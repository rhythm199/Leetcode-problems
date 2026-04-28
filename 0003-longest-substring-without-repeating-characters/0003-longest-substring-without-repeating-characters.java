class Solution {
    public int lengthOfLongestSubstring(String s) {
        int max=0;
        HashSet<Character>h=new HashSet<Character>();
        if(s.length()==0)
            return 0;
        if(s.length()==1)
            return 1;
        int j=0;
        int i=0;
        while(i<s.length())
        {
            if(!h.contains(s.charAt(i))){
                h.add(s.charAt(i++));
                max=Math.max(max,h.size());
            }
            else{
                j++;
                i=j;
                h.clear();
            }
        }
        return max;
    }
}