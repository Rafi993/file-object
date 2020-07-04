const fs = require("fs");
const path = require("path");

const createFileObject = require("./index");
const getContent = require("./getContent");

const getChildren = (currentPath) => () => {
  return fs.readdirSync(currentPath).map((item) => {
    const fullPath = path.join(currentPath, item);
    const stat = fs.lstatSync(fullPath);

    const isFile = stat.isFile();

    if (isFile) {
      return {
        path: fullPath,
        name: item,
        ...stat,
        isFile,
        getContent: getContent(fullPath),
      };
    }

    return createFileObject({
      path: fullPath,
      name: item,
      ...stat,
      isFile,
    });
  });
};
module.exports = getChildren;
