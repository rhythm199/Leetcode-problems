/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
        if (num === 0) return "0";

    const hex = "0123456789abcdef";
    let result = "";


    if (num < 0) {
        num = num >>> 0;
    }

    while (num > 0) {
        let rem = num % 16;
        result = hex[rem] + result;
        num = Math.floor(num / 16);
    }

    return result;

};