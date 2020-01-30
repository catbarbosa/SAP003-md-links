const mdLinks = require("../index");

describe("mdLinks", () => {
  it("is a function", () => {
    expect(typeof mdLinks).toBe("function");
  });
  it("returns links and text", done => {
    return mdLinks("./lib/README.md").then(result => {
      expect(result).toContainEqual({
        text: "npm-scripts",
        link: "https://docs.npmjs.com/misc/scripts"
      });
      done();
    });
  });
  it("should be an error", () => {
    expect(mdLinks()).rejects.toEqual("Coloque um parametro!");
  });
  it("Should return status", done => {
    mdLinks("./lib/Test.md", true).then(result => {
      expect(result).toEqual([
        {
          text: "Teste",
          link: "#teste"
        },
        {
          text: "Markdown",
          link: "https://pt.wikipedia.org/wiki/Markdown",
          status: "OK"
        },
        { text: "Node.js", link: "https://nodejs.org/", status: "OK" },
        {
          text: "md-links",
          link:
            "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
          status: "OK"
        }
      ]);
      done();
    });
  });
});
