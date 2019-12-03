const fs = require("fs");
const fetch = require("node-fetch");

const mdLinks = (path, option) => {
  const links = /([^\[]+)\](\([^\)]*)/gm;
  return new Promise((resolve, reject) => {
    if (!path) {
      reject("Coloque um parametro!");
    }
    fs.readFile(path, "utf-8", (err, data) => {
      const combined = data.match(links);

      const result = combined.map(e => {
        const split = e.split("](");
        return { text: split[0], link: split[1] };
      });

      if (option) {
        const getValidation = result.map(item => {
          if (item.link.indexOf("http") === 0) {
            return fetch(item.link).then(response => {
              item.status = response.statusText;
            });
          }
        });
        Promise.all(getValidation).then(() => resolve(result));
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = mdLinks;
