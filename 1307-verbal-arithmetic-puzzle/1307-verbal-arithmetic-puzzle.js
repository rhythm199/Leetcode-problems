/**
 * @param {string[]} words
 * @param {string} result
 * @return {boolean}
 */
const isSolvable=(r,t)=>{const e=Array(91).fill(0),n=Array(91).fill(!1),l=new Set,o=(r,t)=>{const o=r.length;for(let c=0;c<o;c++){const f=r[c].charCodeAt(0);0===c&&o>1&&(n[f]=!0),l.add(r[c]),e[f]+=t*10**(o-c-1)}};r.forEach((r=>o(r,1))),o(t,-1);const c=[...l],f=Array(10).fill(!1),a=(r,t)=>{if(r===c.length)return 0===t;const l=c[r].charCodeAt(0);for(let o=0;o<=9;o++)if(!(f[o]||0===o&&n[l])){if(f[o]=!0,a(r+1,t+e[l]*o))return!0;f[o]=!1}return!1};return a(0,0)};