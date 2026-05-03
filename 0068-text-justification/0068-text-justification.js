/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const res = [];
    let i = 0;

    while (i < words.length) {
        let line = [];
        let length = 0;

        while (
            i < words.length &&
            length + words[i].length + line.length <= maxWidth
        ) {
            line.push(words[i]);
            length += words[i].length;
            i++;
        }

        let spaces = maxWidth - length;

        if (i === words.length || line.length === 1) {
            let str = line.join(" ");
            str += " ".repeat(maxWidth - str.length);
            res.push(str);
        } else {
            let gaps = line.length - 1;
            let spaceEach = Math.floor(spaces / gaps);
            let extra = spaces % gaps;

            let str = "";

            for (let j = 0; j < line.length; j++) {
                str += line[j];

                if (j < gaps) {
                    let spaceCount = spaceEach + (j < extra ? 1 : 0);
                    str += " ".repeat(spaceCount);
                }
            }

            res.push(str);
        }
    }

    return res;
};