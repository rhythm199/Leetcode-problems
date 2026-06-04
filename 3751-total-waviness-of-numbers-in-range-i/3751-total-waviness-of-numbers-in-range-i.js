/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function(num1, num2) {
    const getWaviness = (number) => {
        const digits = String(number);

        if (digits.length < 3) {
            return 0;
        }

        let wavinessCount = 0;

        for (
            let index = 1;
            index < digits.length - 1;
            index++
        ) {
            const leftDigit = digits[index - 1];
            const currentDigit = digits[index];
            const rightDigit = digits[index + 1];

            if (
                currentDigit > leftDigit &&
                currentDigit > rightDigit
            ) {
                wavinessCount++;
            } else if (
                currentDigit < leftDigit &&
                currentDigit < rightDigit
            ) {
                wavinessCount++;
            }
        }

        return wavinessCount;
    };

    let answer = 0;

    for (
        let currentNumber = num1;
        currentNumber <= num2;
        currentNumber++
    ) {
        answer += getWaviness(currentNumber);
    }

    return answer;
};