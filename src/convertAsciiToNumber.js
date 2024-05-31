const DIGIT_DECODER = {
    " _ | ||_|": 0,
    "     |  |": 1,
    " _  _||_ ": 2,
    " _  _| _|": 3,
    "   |_|  |": 4,
    " _ |_  _|": 5,
    " _ |_ |_|": 6,
    " _   |  |": 7,
    " _ |_||_|": 8,
    " _ |_| _|": 9,
};

const convertAsciiToNumber = (asciiNumber) => {
    let asciiRows = asciiNumber.split("\n");
    const digits = extractThreeByThreeGrid(asciiRows);
    const number = convertDigitsToNumber(digits);
    return number;
};

const extractThreeByThreeGrid = (asciiRows) => {
    const digits = [];
    for (let i = 0; i < 9; i++) {
        const digit = {
            line1: `${asciiRows[0][i * 3]}${asciiRows[0][i * 3 + 1]}${
                asciiRows[0][i * 3 + 2]
            }`,
            line2: `${asciiRows[1][i * 3]}${asciiRows[1][i * 3 + 1]}${
                asciiRows[1][i * 3 + 2]
            }`,
            line3: `${asciiRows[2][i * 3]}${asciiRows[2][i * 3 + 1]}${
                asciiRows[2][i * 3 + 2]
            }`,
        };
        digits.push(digit);
    }
    return digits;
};

const convertDigitsToNumber = (digitsArr) => {
    let numberArr = [];
    digitsArr.forEach((digit) => {
        let digitStr = digit.line1 + digit.line2 + digit.line3;
        if (digitStr in DIGIT_DECODER) {
            numberArr.push(DIGIT_DECODER[digitStr]);
        }
    });
    return numberArr.join("");
};
module.exports = convertAsciiToNumber;
