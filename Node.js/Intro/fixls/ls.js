var fs = require('fs');

var listDirectory = function(directory) {
  fs.readdir(process.argv[2] || '.', function(err, files) {
    if (err) {
      console.log(err.message);
      return;
    }

    var f = files.join('\n');
    console.log(f);
  });
}

fs.lstat(process.argv[2] || '.', function (err, stats) {
   if (err) {
     console.log(err.message);
     return;
   }

   if (stats.isDirectory()) {
     listDirectory(process.argv[2]);
     // how come this works when process.argv[2] is undefined?!?
   } else {
     console.log(process.argv[2]);
   }
});
