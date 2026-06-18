/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} queries
 * @return {number[]}
 */
/**************************😎**************************/
const resultArray=(r,t,o)=>{const l=r.length;if(1===t)return o.map((r=>l-r[2]));const a=Math.max(1,Math.floor(Math.sqrt(l/t))),n=r.map((r=>(r%t+t)%t)),e=Math.ceil(l/a),f=Array.from({length:e},(()=>Array.from({length:t},(()=>Array.from({length:t},(()=>0)))))),h=Array.from({length:e},(()=>Array.from({length:t},(()=>0)))),s=r=>{const o=r*a,e=Math.min(l,o+a);for(let l=0;l<t;l++){const a=Array(t).fill(0);let s=l;for(let r=o;r<e;r++)s=s*n[r]%t,a[s]++;h[r][l]=s,f[r][l]=a}};for(let r=0;r<e;r++)s(r);const m=[];for(const[r,c,M,y]of o){n[r]=(c%t+t)%t,s(Math.floor(r/a));let o=0,A=1;const g=Math.floor(M/a),i=Math.min(l,(g+1)*a);for(let r=M;r<i;r++)A=A*n[r]%t,A===y&&o++;let u=g+1;for(;u<e;)o+=f[u][A][y],A=h[u][A],u++;m.push(o)}return m};