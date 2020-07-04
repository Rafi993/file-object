const createFileObject = require("./index");

// Path is optional if not speficied '/' will be used
// path supplied here should be a folder path
const fileObject = createFileObject({ path: "/home/username" });

// List all files and folders in directory as strings
console.log(Object.keys(fileObject));

// List all files and folders as array of objects with additional attributes
console.log(fileObject.getChildren());

// READ the content of a given file
console.log(fileObject[".zshrc"].getContent());

// Walk through file system like you do on an object
// /home/username/Documents/notes.md
const documents = fileObject["Documents"];
console.log(documents["notes.md"].getContent());
