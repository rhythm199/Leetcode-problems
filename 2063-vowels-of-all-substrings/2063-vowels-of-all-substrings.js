/**
 * @param {string} word
 * @return {number}
 */
const countVowels=t=>{const e=t.length;let n=0;for(let o=0;o<e;o++)"aeiou".includes(t.at(o))&&(n+=(o+1)*(e-o));return n};