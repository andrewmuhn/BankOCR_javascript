const parser = require("../src/parser");

describe("parser", () => {
    it("should take a text file and return the string representing the ascii number", async () => {
        const result = await parser("tests/test_data/zeros.txt");
        expect(result[0]).toBe(` _  _  _  _  _  _  _  _  _ 
| || || || || || || || || |
|_||_||_||_||_||_||_||_||_|`);
    });
    it("should take a text file and return an array of string representing aciii numbers", async () => {
        const result = await parser("tests/test_data/zero-nine.txt");
        expect(result).toHaveLength(10);
        expect(result[0]).toMatch(/([ _|]{27}\n?){3}/);
        expect(result[0]).toBe(` _  _  _  _  _  _  _  _  _ 
| || || || || || || || || |
|_||_||_||_||_||_||_||_||_|`);
        expect(result[1]).toMatch(/([ _|]{27}\n?){3}/);
        expect(result[1]).toBe(`                           
  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |`);
        expect(result[2]).toMatch(/([ _|]{27}\n?){3}/);
        expect(result[2]).toBe(` _  _  _  _  _  _  _  _  _ 
 _| _| _| _| _| _| _| _| _|
|_ |_ |_ |_ |_ |_ |_ |_ |_ `);
        expect(result[3]).toMatch(/([ _|]{27}\n?){3}/);
        expect(result[3]).toBe(` _  _  _  _  _  _  _  _  _ 
 _| _| _| _| _| _| _| _| _|
 _| _| _| _| _| _| _| _| _|`);
        expect(result[4]).toMatch(/([ _|]{27}\n?){3}/);
        expect(result[4]).toBe(`                           
|_||_||_||_||_||_||_||_||_|
  |  |  |  |  |  |  |  |  |`);
        expect(result[5]).toMatch(/([ _|]{27}\n?){3}/);
        expect(result[5]).toBe(` _  _  _  _  _  _  _  _  _ 
|_ |_ |_ |_ |_ |_ |_ |_ |_ 
 _| _| _| _| _| _| _| _| _|`);
        expect(result[6]).toMatch(/([ _|]{27}\n?){3}/);
        expect(result[6]).toBe(` _  _  _  _  _  _  _  _  _ 
|_ |_ |_ |_ |_ |_ |_ |_ |_ 
|_||_||_||_||_||_||_||_||_|`);
        expect(result[7]).toMatch(/([ _|]{27}\n?){3}/);
        expect(result[7]).toBe(` _  _  _  _  _  _  _  _  _ 
  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |`);
        expect(result[8]).toMatch(/([ _|]{27}\n?){3}/);
        expect(result[8]).toBe(` _  _  _  _  _  _  _  _  _ 
|_||_||_||_||_||_||_||_||_|
|_||_||_||_||_||_||_||_||_|`);
        expect(result[9]).toMatch(/([ _|]{27}\n?){3}/);
        expect(result[9]).toBe(` _  _  _  _  _  _  _  _  _ 
|_||_||_||_||_||_||_||_||_|
 _| _| _| _| _| _| _| _| _|`);
    });
});
