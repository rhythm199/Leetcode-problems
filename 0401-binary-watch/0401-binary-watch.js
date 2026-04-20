/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
   const res = [];

    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            if ((h.toString(2) + m.toString(2)).split('1').length - 1 === turnedOn) {
                res.push(h + ":" + (m < 10 ? "0" + m : m));
            }
        }
    }

    return res; 
};