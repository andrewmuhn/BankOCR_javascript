const convertAsciiToNumber = require("../src/convertAsciiToNumber");

describe("convertAsciiToNumber", () => {
    it("should convert ASCII representation of '000000000' to numerical value", () => {
        expect(
            convertAsciiToNumber(` _  _  _  _  _  _  _  _  _ 
| || || || || || || || || |
|_||_||_||_||_||_||_||_||_|

       `)
        ).toBe("000000000");
    });
    it("should convert ASCII representation of '111111111' to numerical value", () => {
        expect(
            convertAsciiToNumber(`                           
  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |
                           
        `)
        ).toBe("111111111");
    });

    it("should convert ASCII representation of '222222222' to numerical value", () => {
        expect(
            convertAsciiToNumber(` _  _  _  _  _  _  _  _  _ 
 _| _| _| _| _| _| _| _| _|
|_ |_ |_ |_ |_ |_ |_ |_ |_ 
                           
        `)
        ).toBe("222222222");
    });
    it("should convert ASCII representation of '333333333' to numerical value", () => {
        expect(
            convertAsciiToNumber(` _  _  _  _  _  _  _  _  _ 
 _| _| _| _| _| _| _| _| _|
 _| _| _| _| _| _| _| _| _|
                           
        `)
        ).toBe("333333333");
    });
    it("should convert ASCII representation of '444444444' to numerical value", () => {
        expect(
            convertAsciiToNumber(`                           
|_||_||_||_||_||_||_||_||_|
  |  |  |  |  |  |  |  |  |
                           
        `)
        ).toBe("444444444");
    });
    it("should convert ASCII representation of '555555555' to numerical value", () => {
        expect(
            convertAsciiToNumber(` _  _  _  _  _  _  _  _  _ 
|_ |_ |_ |_ |_ |_ |_ |_ |_ 
 _| _| _| _| _| _| _| _| _|
                           
        `)
        ).toBe("555555555");
    });
    it("should convert ASCII representation of '666666666' to numerical value", () => {
        expect(
            convertAsciiToNumber(` _  _  _  _  _  _  _  _  _ 
|_ |_ |_ |_ |_ |_ |_ |_ |_ 
|_||_||_||_||_||_||_||_||_|
                           
        `)
        ).toBe("666666666");
    });
    it("should convert ASCII representation of '777777777' to numerical value", () => {
        expect(
            convertAsciiToNumber(` _  _  _  _  _  _  _  _  _ 
  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |
                                           
        `)
        ).toBe("777777777");
    });
    it("should convert ASCII representation of '888888888' to numerical value", () => {
        expect(
            convertAsciiToNumber(` _  _  _  _  _  _  _  _  _ 
|_||_||_||_||_||_||_||_||_|
|_||_||_||_||_||_||_||_||_|
            `)
        ).toBe("888888888");
    });
    it("should convert ASCII representation of '999999999' to numerical value", () => {
        expect(
            convertAsciiToNumber(` _  _  _  _  _  _  _  _  _ 
|_||_||_||_||_||_||_||_||_|
 _| _| _| _| _| _| _| _| _|
                `)
        ).toBe("999999999");
    });
});
