/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const crackSafe=(e,t)=>{let n=[],a=new Set,c="0".repeat(e-1);return function e(c){for(let r=0;r<t;r++){let t=c+r;a.has(t)||(a.add(t),e(t.slice(1)),n.push(r))}}(c),n.push(c),n.join("")};