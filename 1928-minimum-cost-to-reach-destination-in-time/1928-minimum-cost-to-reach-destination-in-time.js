/**
 * @param {number} maxTime
 * @param {number[][]} edges
 * @param {number[]} passingFees
 * @return {number}
 */

var minCost = function(maxTime, edges, passingFees) {
    const n = passingFees.length;
    const graph = Array.from({ length: n }, () => new Map());
    for (const [from, to, time] of edges) {
        graph[from].set(to, Math.min(graph[from].get(to) ?? Infinity, time)); 
        graph[to].set(from, Math.min(graph[to].get(from) ?? Infinity, time)); 
    }

    const pq = new PriorityQueue((a, b) => {
        return a.cost - b.cost || a.time - b.time;
    });
    pq.enqueue({ time: 0, cost: passingFees[0], node: 0 });
    
    const visitedTimeMap = Array(n).fill(Infinity);

    while (pq.size()) {
        const { time, cost, node } = pq.dequeue();

        if (node === n - 1) return cost;
        if (time >= visitedTimeMap[node]) continue;

        visitedTimeMap[node] = time;

        for (const [nextNode, nextTime] of graph[node]) {
            const nextTotalTime = nextTime + time;

            if (nextTotalTime > maxTime) continue;
            if (nextTotalTime >= visitedTimeMap[nextNode]) continue;

            pq.enqueue({
                node: nextNode,
                cost: passingFees[nextNode] + cost,
                time: nextTotalTime
            });
        }
    }
    return -1;
};