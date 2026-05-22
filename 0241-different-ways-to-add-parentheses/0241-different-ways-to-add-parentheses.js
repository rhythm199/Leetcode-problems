/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {

    const memo = new Map();

    function solve(exp) {

        if (memo.has(exp)) {
            return memo.get(exp);
        }

        const result = [];

        for (let i = 0; i < exp.length; i++) {

            const ch = exp[i];

            if (
                ch === '+' ||
                ch === '-' ||
                ch === '*'
            ) {

                const left =
                    solve(exp.slice(0, i));

                const right =
                    solve(exp.slice(i + 1));

                for (const l of left) {

                    for (const r of right) {

                        if (ch === '+') {
                            result.push(l + r);
                        }

                        else if (ch === '-') {
                            result.push(l - r);
                        }

                        else {
                            result.push(l * r);
                        }
                    }
                }
            }
        }

        if (result.length === 0) {
            result.push(Number(exp));
        }

        memo.set(exp, result);

        return result;
    }

    return solve(expression);
};