const mdLinks = require("../index");

describe("mdLinks", () => {
  it("is a function", () => {
    expect(typeof mdLinks).toBe("function");
  });
  it("returns links and text", done => {
    return mdLinks("./README.md").then(result => {
      expect(result).toEqual(result);
      done();
    });
  });
  it("return", () => {
    return mdLinks("./READM.md").catch(reject => {
      expect(reject).toEqual(reject);
    });
  });
});
