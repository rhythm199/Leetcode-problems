/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
const countCompleteSubstrings=(t,o)=>{const n=t.length,e=[];for(let o=1;o<n;o++){const n=t.charCodeAt(o-1),r=t.charCodeAt(o);Math.abs(n-r)>2&&e.push(o)}e.push(n);e.length;const r=new Array(n);r[-1]=new Array(26).fill(0);for(let o=0;o<n;o++){const n=t.charCodeAt(o)-97;(r[o]=[...r[o-1]])[n]++}let s=0;for(let t=0,c=0;t<n;t++){for(;e[c]<=t;c++);const n=r[t-1],f=e[c];t:for(let e=1;e<=26;e++){const c=t-1+e*o;if(c>=f)break;const l=r[c];for(const[t,e]of n.entries()){const n=l[t]-e;if(n>0&&n!==o)continue t}s++}}return s};