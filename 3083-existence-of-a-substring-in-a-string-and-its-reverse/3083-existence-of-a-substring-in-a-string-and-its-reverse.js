/**
 * @param {string} s
 * @return {boolean}
 */
const isSubstringPresent=t=>{let e={};for(let r=0;r<t.length-1;r++)if(e[t[r]+t[r+1]]=1,e[t[r+1]+t[r]])return!0;return!1};