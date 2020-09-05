
let fs = require('fs'),
archiver = require('archiver');

// init
var output = fs.createWriteStream(__dirname + '/output.zip');
var archive = archiver('zip', { zlib: { level: 9 } });
archive.pipe(output);

// callback
output.on('close', () => { console.log('callback when everything is finished'); });

// append files / folders
  
archive.directory('backup/', false);
archive.glob('subdir/*.txt');
archive.finalize();