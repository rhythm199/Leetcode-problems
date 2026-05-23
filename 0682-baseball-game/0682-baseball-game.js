/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack = [];

    for (let op of operations) {

        if (op === "+") {
            let val = stack[stack.length - 1] + stack[stack.length - 2];
            stack.push(val);

        } else if (op === "D") {
            stack.push(stack[stack.length - 1] * 2);

        } else if (op === "C") {
            stack.pop();

        } else {
            stack.push(Number(op));
        }
    }

    return stack.reduce((a, b) => a + b, 0);
};