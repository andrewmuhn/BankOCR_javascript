const parser = require("./parser");
const convertAsciiToNumber = require("./convertAsciiToNumber");

const bankOCR = async (filePath) => {
    try {
        const asciiArr = await parser(filePath);
        const numArr = asciiArrToNumArr(asciiArr);
        return numArr;
    } catch (err) {
        console.error(err);
        return;
    }
};

const asciiArrToNumArr = (asciiArr) => {
    const numArr = [];
    asciiArr.forEach((asciiNum) => {
        const numStr = convertAsciiToNumber(asciiNum);
        numArr.push(numStr);
    });
    return numArr;
};

module.exports = bankOCR;
