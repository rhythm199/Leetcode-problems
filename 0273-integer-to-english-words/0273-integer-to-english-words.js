/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {

    if (num === 0) return "Zero";

    const below20 = [
        "", "One", "Two", "Three", "Four",
        "Five", "Six", "Seven", "Eight",
        "Nine", "Ten", "Eleven", "Twelve",
        "Thirteen", "Fourteen", "Fifteen",
        "Sixteen", "Seventeen", "Eighteen",
        "Nineteen"
    ];

    const tens = [
        "", "", "Twenty", "Thirty", "Forty",
        "Fifty", "Sixty", "Seventy",
        "Eighty", "Ninety"
    ];

    function helper(n) {

        if (n === 0) return "";

        if (n < 20) {
            return below20[n] + " ";
        }

        if (n < 100) {

            return (
                tens[Math.floor(n / 10)] +
                " " +
                helper(n % 10)
            );
        }

        return (
            below20[Math.floor(n / 100)] +
            " Hundred " +
            helper(n % 100)
        );
    }

    let result = "";

    const billion = Math.floor(num / 1000000000);
    num %= 1000000000;

    const million = Math.floor(num / 1000000);
    num %= 1000000;

    const thousand = Math.floor(num / 1000);
    num %= 1000;

    if (billion) {
        result += helper(billion) + "Billion ";
    }

    if (million) {
        result += helper(million) + "Million ";
    }

    if (thousand) {
        result += helper(thousand) + "Thousand ";
    }

    if (num) {
        result += helper(num);
    }

    return result.trim();
};