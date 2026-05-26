/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    const parent = Array.from({ length: 26 }, (_, i) => i);

    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }

        return parent[x];
    }

    function union(x, y) {
        parent[find(x)] = find(y);
    }

    // Process ==
    for (const eq of equations) {
        if (eq[1] === '=') {
            const a = eq.charCodeAt(0) - 97;
            const b = eq.charCodeAt(3) - 97;

            union(a, b);
        }
    }
    for (const eq of equations) {
        if (eq[1] === '!') {
            const a = eq.charCodeAt(0) - 97;
            const b = eq.charCodeAt(3) - 97;

            if (find(a) === find(b)) {
                return false;
            }
        }
    }

    return true;
};