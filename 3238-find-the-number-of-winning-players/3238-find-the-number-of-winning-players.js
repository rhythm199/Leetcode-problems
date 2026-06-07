/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
const winningPlayerCount=(e,r)=>r.reduce((e,[r,n])=>(e[r][n]++,e),Array.from({length:101},()=>new Array(11).fill(0))).reduce((e,r,n)=>e+ +r.some(e=>e>n),0);