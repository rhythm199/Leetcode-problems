/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxPalindromes=(t,r)=>{let e=0;const n=t=>{let r=0,e=t.length-1;for(;r<e;){if(t[r]!==t[e])return!1;r++,e--}return!0};let l=t.length,s=0;for(;s+r<=l;){let o=1;n(t.substring(s,s+r))?(e++,o=r):s+r+1<=l&&n(t.substring(s,s+r+1))&&(e++,o=r+1),s+=o}return e};