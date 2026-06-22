/**
 * @param {number[]} nums
 * @param {number} space
 * @return {number}
 */
const destroyTargets=(t,o)=>{t.sort((t,o)=>t-o);const r={};for(let s of t){const t=s%o;r[t]||(r[t]=0),r[t]++}let s,e=0;for(let n of t){const t=n%o;r[t]>e&&(e=r[t],s=n)}return s};