/**
 * @param {number[][]} image
 * @param {number} threshold
 * @return {number[][]}
 */
var resultGrid = function(image, threshold) {
    const m = image.length;
    const n = image[0].length;

    const sum = Array.from({ length: m }, () => Array(n).fill(0));
    const cnt = Array.from({ length: m }, () => Array(n).fill(0));

    const validRegion = (r, c) => {
        for (let i = r; i < r + 3; i++) {
            for (let j = c; j < c + 2; j++) {
                if (Math.abs(image[i][j] - image[i][j + 1]) > threshold)
                    return false;
            }
        }

        for (let i = r; i < r + 2; i++) {
            for (let j = c; j < c + 3; j++) {
                if (Math.abs(image[i][j] - image[i + 1][j]) > threshold)
                    return false;
            }
        }

        return true;
    };

    for (let r = 0; r <= m - 3; r++) {
        for (let c = 0; c <= n - 3; c++) {

            if (!validRegion(r, c)) continue;

            let regionSum = 0;

            for (let i = r; i < r + 3; i++) {
                for (let j = c; j < c + 3; j++) {
                    regionSum += image[i][j];
                }
            }

            const avg = Math.floor(regionSum / 9);

            for (let i = r; i < r + 3; i++) {
                for (let j = c; j < c + 3; j++) {
                    sum[i][j] += avg;
                    cnt[i][j]++;
                }
            }
        }
    }

    const ans = Array.from({ length: m }, () => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            ans[i][j] = cnt[i][j]
                ? Math.floor(sum[i][j] / cnt[i][j])
                : image[i][j];
        }
    }

    return ans;
};