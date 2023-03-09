const fs = require("fs");

const beformMem = process.memoryUsage().rss;
fs.readFile("./file.txt", (_, data) => {
  fs.writeFile("./file2.txt", data, () => {});
  // mem calc
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beformMem;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`Consumed Memory: ${consumed}`);
});