const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('.editorconfig');
const writeStream = fs.createWriteStream('.editorconfig.zip');
const transformStream = zlib.createGzip();

// cat .editorconfig | gzip > .editorconfig.copy
readStream.pipe(transformStream).pipe(writeStream);


readStream.pipe(process.stdout);
