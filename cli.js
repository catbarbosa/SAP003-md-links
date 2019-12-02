#! /usr/bin/env node
const mdLinks = require("./lib/index");

mdLinks("./README.md")
  .then(result => console.log(result))
  .catch(error => console.log(error));
