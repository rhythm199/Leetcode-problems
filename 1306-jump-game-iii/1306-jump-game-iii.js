/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const n = arr.length;
    const visited = new Array(n).fill(false);
    function dfs(i) {
        if (i < 0 || i >= n || visited[i]) {
            return false;
        }
        if (arr[i] === 0) {
            return true;
        }

        visited[i] = true;
        return dfs(i + arr[i]) || dfs(i - arr[i]);
    }

    return dfs(start);
};