const fs = require('fs-extra');
const path = require('path');
const md5 = require('md5');
const Terser = require('terser');
const minimist = require('minimist');

const argv = minimist(process.argv.slice(2));

// commander
// générer sur --help

// minimist optimist yargs

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');

// Attention dans fs-extra
// on écrit fs.readFile pour la version basé sur les promesses
// et pas fs.promises.readFile

async function removeAndMkdir(dirPath) {
  await fs.remove(dirPath); // fs-extra
  await fs.mkdir(dirPath);
}

async function buildJs() {
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  let content = Buffer.concat(buffers).toString('utf-8');

  if (argv.minify) {
    const { code, error } = Terser.minify(content);

    if (error) {
      throw error;
    }

    content = code;
  }

  let jsFileName = 'app.js';

  if (argv.md5) {
    jsFileName = `app.${md5(content)}.js`;
  }

  const appJsDistPath = path.resolve(distPath, jsFileName);
  await fs.writeFile(appJsDistPath, content);

  return jsFileName;
}

async function buildHtml(jsFileName = 'app.js') {
  let content = await fs.readFile(indexHtmlPath, { encoding: 'utf-8' });

  // content = content.replace('<script src="./js/horloge.js"></script>', '')
  //   .replace('<script src="./js/index.js"></script>', '<script src="./app.js"></script>');

  content = content.replace(/<script.*<\/script>/s, `<script src="${jsFileName}"></script>`);

  await fs.writeFile(indexHtmlDistPath, content);
}

(async () => {
  await removeAndMkdir(distPath);

  const jsFileName = await buildJs();
  await buildHtml(jsFileName);

  console.log('Build DONE');
})();
