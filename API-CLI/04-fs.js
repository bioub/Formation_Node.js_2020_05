const path = require("path");
const fs = require("fs");

const ecPath = path.resolve(__dirname, ".editorconfig");
const ecCopyPath = path.resolve(__dirname, ".editorconfig.copy");

// Sync
try {
  const content = fs.readFileSync(ecPath, { encoding: "utf-8" });
  fs.writeFileSync(ecCopyPath, content);
  console.log("DONE");
} catch (err) {
  console.log(err);
}

// Async
// Callback Hell / Pyramid of Doom
// callbackhell.com
fs.readFile(ecPath, { encoding: "utf-8" }, (err, content) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(ecCopyPath, content, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("DONE");
      }
    });
  }
});

// Async Promise
// Promise classe d'ES6
// avant ES6, lib : bluebird, q...
// Depuis Node 12 fs utilise les promesses
fs.promises.readFile(ecPath, { encoding: "utf-8" })
  .then((content) => fs.promises.writeFile(ecCopyPath, content))
  .then(() => console.log("DONE"))
  .catch((err) => console.log(err))


// Depuis ES2017
// async / await
async function copy() {
  try {
    const content = await fs.promises.readFile(ecPath, { encoding: "utf-8" });
    await fs.promises.writeFile(ecCopyPath, content);
    console.log("DONE");
  } catch (err) {
    console.log(err);
  }
}

copy();
