/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    const map = new Map();
    let maxEdges = 0;

    for (const row of wall) {
        let prefix = 0;

        // Skip last brick
        for (let i = 0; i < row.length - 1; i++) {
            prefix += row[i];

            map.set(prefix, (map.get(prefix) || 0) + 1);

            maxEdges = Math.max(maxEdges, map.get(prefix));
        }
    }

    return wall.length - maxEdges;
};