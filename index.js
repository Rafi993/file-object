const keys = require("./keys");
const getChildren = require("./getChildren");
const get = require("./get");

const createFileObject = (config = {}) => {
  const path = config.path || "/";
  const fileObject = {
    ...config,
    path,
    getChildren: getChildren(path),
  };

  return new Proxy(fileObject, {
    ownKeys: keys,
    get,
    getOwnPropertyDescriptor(k) {
      return {
        enumerable: true,
        configurable: true,
      };
    },
  });
};

module.exports = createFileObject;
