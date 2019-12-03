#! /usr/bin/env node
const mdLinks = require("./lib/index");

mdLinks("./README.md")
  .then(
    result.forEach(item => {
      console.log(item.href, "-", item.text.substring(0, 50));
    })
  )
  .catch(error => console.log(error));
