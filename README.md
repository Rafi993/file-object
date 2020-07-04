# File Object

Access file system like you access any objects

## Why?

Sometimes you want to write a small script that deals files and it can be annoying to deal with file
system API's. This Project provides proxied object that allow you to act as if the files and folders
are present in the memory in that object (even they are not).

## Usage

```
$ npm i node_file_object
```

```javascript
const createFileObject = require("node_file_object");

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
```

## Downsides?

Since it is meant to function like direct object access it uses synchronous file API's which might cause performance issues when used in
large projects (since it has to wait for IO to complete). But this project will prove usefull for smaller scripts where this does
not matter.
