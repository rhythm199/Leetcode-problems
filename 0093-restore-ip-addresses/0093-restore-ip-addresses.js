/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const res = [];
    
    function backtrack(startIndex, path) {
        if (path.length === 4) {
            if (startIndex === s.length) res.push(path.join("."));
            return;
        }

        for (let len = 1; len <= 3; len++) {
            if (startIndex + len > s.length) break;
            
            let segment = s.substring(startIndex, startIndex + len);
            
            if ((segment.startsWith("0") && segment.length > 1) || parseInt(segment) > 255) {
                continue;
            }
            
            backtrack(startIndex + len, [...path, segment]);
        }
    }

    backtrack(0, []);
    return res;
};