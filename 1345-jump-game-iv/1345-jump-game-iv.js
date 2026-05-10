/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
    const n = arr.length;

    if (n === 1) return 0;

    const map = new Map();

    for (let i = 0; i < n; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], []);
        }

        map.get(arr[i]).push(i);
    }

    const visited = Array(n).fill(false);
    visited[0] = true;

    let queue = [0];
    let steps = 0;

    while (queue.length) {
        let size = queue.length;

        while (size--) {
            let i = queue.shift();

            if (i === n - 1) {
                return steps;
            }

            const next = [];

            if (i - 1 >= 0) next.push(i - 1);
            if (i + 1 < n) next.push(i + 1);

            next.push(...map.get(arr[i]));

            for (let ni of next) {
                if (!visited[ni]) {
                    visited[ni] = true;
                    queue.push(ni);
                }
            }

            map.set(arr[i], []);
        }

        steps++;
    }

    return -1;
};