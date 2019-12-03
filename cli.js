#! /usr/bin/env node
const mdLinks = require("./lib/index");
const path = process.argv[2];
const option= process.argv[3];

mdLinks(path, option)
  .then(result =>
    result.forEach(item => {
      if (option) {
        console.log(item.text, item.link, item.status);
      } else {
        console.log(item.text, item.link);
      }
    })
  )
  .catch(error => console.log(error));
