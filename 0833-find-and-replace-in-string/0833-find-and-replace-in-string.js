/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
const findReplaceString=(n,t,e,c)=>{const o=[...n];return t.forEach(((t,i)=>{const l=e[i],r=c[i];if(n.slice(t,t+l.length)===l){o[t]=r;for(let n=1;n<l.length;n++)o[t+n]=""}})),o.join("")};