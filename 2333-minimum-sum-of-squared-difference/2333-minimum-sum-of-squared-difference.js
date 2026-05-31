/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */

const minSumSquareDiff = (t, e, n, l) => { const r = t.length, o = new Array(r).fill(0); for (let n = 0; n < r; n++)o[n] = Math.abs(t[n] - e[n]); o.sort(((t, e) => e - t)); const f = new Array(o[0] + 1).fill(0); let i = n + l; for (let t of o) f[t]++; for (let t = f.length - 1; i > 0 && t >= 0; t--) { if (0 == f[t]) continue; const e = Math.min(f[t], i); f[t] -= e, f[t - 1] += e, i -= e } let a = 0; for (let t = f.length - 1; t >= 1; t--)a += f[t] * t * t; return a };