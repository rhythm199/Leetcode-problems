/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
const minScore = (n, roads) => {
    const root = [...Array(n + 1).keys()];
    const find = i => root[i] === i ? i : root[i] = find(root[i]);


    for (const [x, y, _] of roads)
        root[find(x)] = find(y);

    roads = roads.filter(r => find(r[0]) === find(1));

    let min = Infinity;

    for (const [, , d] of roads)
        min = Math.min(min, d);

    return min;
};