const bankOCR = require("../src/bankOCR");

describe("bankOCR", () => {
    it("should take in a file with one asciiNumber and convert it to an array with one number string", async () => {
        const result = await bankOCR("tests/test_data/zeros.txt");
        expect(result).toHaveLength(1);
        expect(result[0]).toBe("000000000");
    });
    it("should take in a file with several asciiNumbers and convert it to an array with number strings", async () => {
        const result = await bankOCR("tests/test_data/zero-nine.txt");
        expect(result).toHaveLength(10);
        for (let i = 1; i <= 9; i++) {
            expect(result[i]).toBe(i.toString().repeat(9));
        }
    });
});
