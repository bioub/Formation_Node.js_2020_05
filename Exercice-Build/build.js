const fs = require('fs-extra');
const path = require('path');
const md5 = require('md5');
const Terser = require('terser');
const minimist = require('minimist');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

// Attention dans fs-extra
// on écrit fs.readFile pour la version basé sur les promesses
// et pas fs.promises.readFile

async function removeAndMkdir(dirPath) {
  await fs.remove(dirPath);
  await fs.mkdir(dirPath);
}

async function buildJs() {
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  await fs.writeFile(appJsDistPath, Buffer.concat(buffers));
}

async function buildHtml() {
  let content = await fs.readFile(indexHtmlPath, { encoding: 'utf-8' });

  // content = content.replace('<script src="./js/horloge.js"></script>', '')
  //   .replace('<script src="./js/index.js"></script>', '<script src="./app.js"></script>');

  content = content.replace(/<script.*<\/script>/s, '<script src="./app.js"></script>');

  await fs.writeFile(indexHtmlDistPath, content);
}

(async () => {
  await removeAndMkdir(distPath);
  await Promise.all([
    buildJs(),
    buildHtml(),
  ]);
  console.log('Build DONE');
})();
