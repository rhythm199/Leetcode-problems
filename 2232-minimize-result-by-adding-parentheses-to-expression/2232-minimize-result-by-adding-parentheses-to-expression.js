/**
 * @param {string} expression
 * @return {string}
 */
var minimizeResult = function(expression) {

    const plus = expression.indexOf('+');

    let minValue = Infinity;
    let answer = "";

    for (let i = 0; i < plus; i++) {

        for (
            let j = plus + 1;
            j < expression.length;
            j++
        ) {

            const left1 =
                expression.slice(0, i);

            const left2 =
                expression.slice(i, plus);

            const right1 =
                expression.slice(plus + 1, j + 1);

            const right2 =
                expression.slice(j + 1);

            const a = left1 === "" ? 1 : Number(left1);
            const b = Number(left2);
            const c = Number(right1);
            const d = right2 === "" ? 1 : Number(right2);

            const value =
                a * (b + c) * d;

            if (value < minValue) {

                minValue = value;

                answer =
                    left1 +
                    "(" +
                    left2 +
                    "+" +
                    right1 +
                    ")" +
                    right2;
            }
        }
    }

    return answer;
};