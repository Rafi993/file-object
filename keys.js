const fs = require("fs");
const path = require("path");

const keys = (target) => {
  const currentPath = Reflect.get(target, "path");
  return fs.readdirSync(currentPath);
};
module.exports = keys;
