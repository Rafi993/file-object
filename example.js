const createFileObject = require("./index");

// Path is optional if not speficied '/' will be used
const fileObject = createFileObject({ path: "/home/rafi" });

// List all files and folders in directory as strings
// console.log(Object.keys(fileObject));

// List all files and folders as array of objects with additional attributes
// console.log(fileObject.getChildren());

console.log(fileObject[".zshrc"].getContent());
