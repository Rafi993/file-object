const fs = require("fs");
const path = require("path");

const createFileObject = require("./index");
const getContent = require("./getContent");

const get = (target, property) => {
  const value = Reflect.get(target, property);

  // Check if it is existing property and return it
  if (value) {
    return value;
  }

  // If it is not existing property treat it as file
  try {
    const rootPath = Reflect.get(target, "path");
    const fullPath = path.join(rootPath, property);

    const stat = fs.lstatSync(fullPath);
    const isFile = stat.isFile();

    const fileObject = {
      path: fullPath,
      name: property,
      ...stat,
      isFile,
      getContent: getContent(fullPath),
    };

    if (isFile) {
      return fileObject;
    }

    return createFileObject(fileObject);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
module.exports = get;
