/**
 * @param {number[]} scores
 * @param {number[][]} edges
 * @return {number}
 */
var maximumScore = function(scores, edges) {
    const n = scores.length;

    const best = Array.from(
        { length: n },
        () => []
    );

    for (const [u, v] of edges) {
        best[u].push(v);
        best[v].push(u);
    }

    for (let i = 0; i < n; i++) {
        best[i].sort((a, b) => scores[b] - scores[a]);

        if (best[i].length > 3) {
            best[i] = best[i].slice(0, 3);
        }
    }

    let ans = -1;

    for (const [b, c] of edges) {

        for (const a of best[b]) {

            if (a === c) continue;

            for (const d of best[c]) {

                if (
                    d === b ||
                    d === a
                ) continue;

                ans = Math.max(
                    ans,
                    scores[a] +
                    scores[b] +
                    scores[c] +
                    scores[d]
                );
            }
        }
    }

    return ans;
};