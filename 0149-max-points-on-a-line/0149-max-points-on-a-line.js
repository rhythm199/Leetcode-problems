/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    const n = points.length;

    if (n <= 2) return n;

    let ans = 0;

    const gcd = (a, b) => {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    };

    for (let i = 0; i < n; i++) {
        const map = new Map();

        for (let j = i + 1; j < n; j++) {
            let dx = points[j][0] - points[i][0];
            let dy = points[j][1] - points[i][1];

            if (dx === 0) {
                dy = 1;
            } else if (dy === 0) {
                dx = 1;
            } else {
                if (dx < 0) {
                    dx = -dx;
                    dy = -dy;
                }

                const g = gcd(Math.abs(dx), Math.abs(dy));

                dx /= g;
                dy /= g;
            }

            const key = dx + "#" + dy;

            map.set(key, (map.get(key) || 0) + 1);

            ans = Math.max(ans, map.get(key) + 1);
        }
    }

    return ans;
};