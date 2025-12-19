const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "test.txt");

fs.writeFileSync(filePath, "this is a very hard test");

const data = fs.readFileSync(filePath, "utf-8");
console.log(data);

