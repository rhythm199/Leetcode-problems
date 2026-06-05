/**
 * @param {string} s
 * @param {number} t
 * @param {number[]} nums
 * @return {number}
 */
function lengthAfterTransformations(s, t, nums) {
  const MOD = 1000000007n;
  const bigT = BigInt(t);

  let count = Array(26).fill(0n);
  for (const ch of s) {
    count[ch.charCodeAt(0) - 97]++;
  }

  let bits = 0;
  let tmp = bigT;
  while (tmp > 0n) {
    bits++;
    tmp >>= 1n;
  }
  if (bits === 0) bits = 1;


  const spt = Array.from({ length: 26 }, () =>
    Array.from({ length: bits }, () => Array(26).fill(0n))
  );


  for (let i = 0; i < 26; i++) {
    const maxStep = Math.min(26, nums[i]);
    for (let step = 1; step <= maxStep; step++) {
      spt[i][0][(i + step) % 26]++;
    }
  }

  for (let b = 1; b < bits; b++) {
    for (let i = 0; i < 26; i++) {
      const out = spt[i][b];
      const prev = spt[i][b - 1];
      for (let mid = 0; mid < 26; mid++) {
        const ways1 = prev[mid];
        if (ways1 === 0n) continue;
        const row2 = spt[mid][b - 1];
        for (let k = 0; k < 26; k++) {
          out[k] = (out[k] + ways1 * row2[k]) % MOD;
        }
      }
    }
  }

  let currCount = count;
  for (let b = 0; b < bits; b++) {
    if (((bigT >> BigInt(b)) & 1n) === 1n) {
      const next = Array(26).fill(0n);
      for (let i = 0; i < 26; i++) {
        const ci = currCount[i];
        if (ci === 0n) continue;
        const row = spt[i][b];
        for (let j = 0; j < 26; j++) {
          next[j] = (next[j] + ci * row[j]) % MOD;
        }
      }
      currCount = next;
    }
  }

  let result = 0n;
  for (const v of currCount) {
    result = (result + v) % MOD;
  }
  return Number(result);
}