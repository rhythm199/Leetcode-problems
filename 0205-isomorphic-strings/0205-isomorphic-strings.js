/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const mapST = new Map();
    const mapTS = new Map();

    for (let i = 0; i < s.length; i++) {
        const chS = s[i];
        const chT = t[i];

        if (
            mapST.has(chS) &&
            mapST.get(chS) !== chT
        ) {
            return false;
        }

        if (
            mapTS.has(chT) &&
            mapTS.get(chT) !== chS
        ) {
            return false;
        }

        mapST.set(chS, chT);
        mapTS.set(chT, chS);
    }

    return true;
};