/**
 * @param {number[][]} pairs
 * @return {number}
 */
var checkWays = function (pairs) {
    const graph = new Map();

    for (const [u, v] of pairs) {
        if (!graph.has(u)) graph.set(u, new Set());
        if (!graph.has(v)) graph.set(v, new Set());

        graph.get(u).add(v);
        graph.get(v).add(u);
    }

    const n = graph.size;

    let root = -1;

    for (const [node, neighbors] of graph) {
        if (neighbors.size === n - 1) {
            root = node;
            break;
        }
    }

    if (root === -1) return 0;

    let result = 1;

    for (const [node, neighbors] of graph) {
        if (node === root) continue;

        let parent = -1;
        let parentDegree = Infinity;
        const currDegree = neighbors.size;

        for (const neighbor of neighbors) {
            const neighborDegree = graph.get(neighbor).size;

            if (
                neighborDegree >= currDegree &&
                neighborDegree < parentDegree
            ) {
                parent = neighbor;
                parentDegree = neighborDegree;
            }
        }

        if (parent === -1) return 0;

        for (const neighbor of neighbors) {
            if (neighbor === parent) continue;

            if (!graph.get(parent).has(neighbor)) {
                return 0;
            }
        }

        if (parentDegree === currDegree) {
            result = 2;
        }
    }

    return result;
};