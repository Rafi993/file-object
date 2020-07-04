# File Object

Access file system like you access any objects

## Why?

Sometimes you want to write a small script that deals files and it can be annoying to deal with file
system API's. This Project provides proxied object that allow you to act as if the files and folders
are present in the memory in that object (even they are not).

## Downsides?

Since it is meant to function like direct object access it uses synchronous file API's which might cause performance issues when used in
large projects (since it has to wait for IO to complete). But this project will prove usefull for smaller scripts where this does
not matter.
