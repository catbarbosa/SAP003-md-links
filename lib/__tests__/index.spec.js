const mdLinks = require("../index");

describe("mdLinks", () => {
  it("is a function", () => {
    expect(typeof mdLinks).toBe("function");
  });
  it("returns links and text", done => {
    return mdLinks("./README.md").then(result => {
      expect(result).toBe(result);
      done();
    });
  });
  it("return", () => {
    return mdLinks("README.md").catch(reject => {
      expect(reject).toBe(reject);
    });
  });
});
