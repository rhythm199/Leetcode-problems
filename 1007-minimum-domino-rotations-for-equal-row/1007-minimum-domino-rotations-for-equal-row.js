/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
    const n = tops.length;
    function check(target) {
        let topRotations = 0;
        let bottomRotations = 0;
        
        for (let i = 0; i < n; i++) {
            if (tops[i] !== target && bottoms[i] !== target) {
                return Infinity;
            }
            else if (tops[i] !== target) {
                topRotations++;
            }
            else if (bottoms[i] !== target) {
                bottomRotations++;
            }
        }
        return Math.min(topRotations, bottomRotations);
    }

    const res = Math.min(check(tops[0]), check(bottoms[0]));
    
    return res === Infinity ? -1 : res;
};