var fs = require('fs');
var filePrefix = '0_';
var ext = ".png";
var folderName = 'changed';
var counter = 6;

function examine (path) {
  // fs.readdir(path, function (err, files) {
    // files.forEach(function (file) {
    for(let i = 10006 ; i <= 10120; i++){
      var oldPath = "./" + i + ext;

      // fs.stat(oldPath, function (err, stats) {
        // if (stats.isDirectory()) {
          // examine(oldPath + '/');
        // } else {

   //        var suffix = oldPath.substr(oldPath.length - 3);
			// if (suffix === 'png') {
			console.log(oldPath);
			console.log('renaming with file name ' + filePrefix + counter + '.png');
			fs.rename(oldPath, './' + filePrefix + counter + '.png', function (e) {
				console.log(e);	    
			});
			counter++;

			// } 
			 
      // });
    }
}

examine('./');

