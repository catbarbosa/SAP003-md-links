const fs = require("fs");

const mdLinks = () => {
  const links = /([^\[]+)\](\([^\)]*)/gm;
  return new Promise((resolve, reject) => {
    fs.readFile("README.md", "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const combined = data.match(links);
        const result = combined.map(e => {
          const split = e.split("](");
          const text = split[0].replace(/\[/, "");
          const link = split[0].replace(/\[/, "");

          return { text, link };
        });
        resolve(console.log(result));
      }
    });
  });
};
module.exports = mdLinks;
