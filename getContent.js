const fs = require("fs");
const path = require("path");

const getContent = (currentPath) => () =>
  fs.readFileSync(currentPath).toString();

module.exports = getContent;
