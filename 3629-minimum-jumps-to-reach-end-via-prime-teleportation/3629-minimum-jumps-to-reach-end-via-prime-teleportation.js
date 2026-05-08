/**
 * @param {number[]} nums
 * @return {number}
 */
var minJumps = function(nums) {
    const n = nums.length;
    if (n === 1) return 0;

    const MAX = Math.max(...nums);

    const spf = Array(MAX + 1).fill(0);

    for (let i = 2; i <= MAX; i++) {
        if (spf[i] === 0) {
            for (let j = i; j <= MAX; j += i) {
                if (spf[j] === 0) spf[j] = i;
            }
        }
    }

    function getPrimeFactors(x) {
        const factors = [];

        while (x > 1) {
            const p = spf[x];
            factors.push(p);

            while (x % p === 0) {
                x /= p;
            }
        }

        return factors;
    }

    const bucket = new Map();

    for (let i = 0; i < n; i++) {
        const factors = getPrimeFactors(nums[i]);

        for (const p of factors) {
            if (!bucket.has(p)) {
                bucket.set(p, []);
            }

            bucket.get(p).push(i);
        }
    }

    function isPrime(x) {
        return x >= 2 && spf[x] === x;
    }

    const visited = Array(n).fill(false);
    visited[0] = true;

    const queue = [[0, 0]];
    let head = 0;

    while (head < queue.length) {
        const [i, dist] = queue[head++];

        if (i === n - 1) return dist;

        for (const ni of [i - 1, i + 1]) {
            if (ni >= 0 && ni < n && !visited[ni]) {
                visited[ni] = true;
                queue.push([ni, dist + 1]);
            }
        }

        const val = nums[i];

        if (isPrime(val) && bucket.has(val)) {
            for (const ni of bucket.get(val)) {
                if (!visited[ni]) {
                    visited[ni] = true;
                    queue.push([ni, dist + 1]);
                }
            }

            bucket.delete(val);
        }
    }

    return -1;
};