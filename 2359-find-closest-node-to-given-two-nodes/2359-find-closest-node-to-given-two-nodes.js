/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function(edges, node1, node2) {
    const getDistance = (start) => {
        const dist = new Array(edges.length).fill(-1);

        let curr = start;
        let d = 0;

        while (curr !== -1 && dist[curr] === -1) {
            dist[curr] = d++;
            curr = edges[curr];
        }

        return dist;
    };

    const dist1 = getDistance(node1);
    const dist2 = getDistance(node2);

    let answer = -1;
    let minDistance = Infinity;

    for (let i = 0; i < edges.length; i++) {

        if (dist1[i] !== -1 && dist2[i] !== -1) {

            const maxDist = Math.max(dist1[i], dist2[i]);

            if (maxDist < minDistance) {
                minDistance = maxDist;
                answer = i;
            }
        }
    }

    return answer;
};