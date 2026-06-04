/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
var pyramidTransition = function(bottom, allowed) {
    const transitionMap = new Map();

    for (const rule of allowed) {
        const base = rule.substring(0, 2);

        if (!transitionMap.has(base)) {
            transitionMap.set(base, []);
        }

        transitionMap.get(base).push(rule[2]);
    }

    const buildNextLevel = (currentRow, position, nextRow) => {
        if (currentRow.length === 1) {
            return true;
        }

        if (position === currentRow.length - 1) {
            return buildNextLevel(nextRow, 0, "");
        }

        const pair = currentRow.substring(position, position + 2);

        if (!transitionMap.has(pair)) {
            return false;
        }

        for (const topChar of transitionMap.get(pair)) {
            if (
                buildNextLevel(
                    currentRow,
                    position + 1,
                    nextRow + topChar
                )
            ) {
                return true;
            }
        }

        return false;
    };

    return buildNextLevel(bottom, 0, "");
};