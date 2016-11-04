var dive = require('dive')
    ,path = require('path')
    ,sizeOf = require('image-size')
    , upath = require('upath')
    , randomstring = require("randomstring");

var cWD = process.cwd();
console.log(process.cwd());
var typesDir = [];
dive(process.cwd(), { directories: true, files: false, recursive: false }, function(err, dir) {
  if (err) throw err;
  typesDir.push({
      cat : dir.split(path.sep).pop(),
      dir : dir
  });
}, function() {
  console.log('complete');
  console.log(typesDir);
  walkDir();    
});

var categorized = {};

function walkDir(){


    typesDir.forEach(function(value,index){
        var catagory = value.cat;
        categorized[catagory] = [];
        var dir = value.dir;
        dive(dir, {}, function(err, file, stat) {
        if (err) throw err;
            var parsed = path.parse(file);
            var src  = upath.toUnix(path.relative(cWD+'\\..\\..\\',file));
            var dimensions = sizeOf(file);
            // console.log(dimensions.width, dimensions.height);

            categorized[catagory].push({
                title : parsed.name,
                src: src,
                category: catagory,
                w: dimensions.width,
                h: dimensions.height,
                color: "default",
                size: "small",
                id: randomstring.generate(7)
            });
            // console.log(file);
        }, function() {
            // console.log(categorized[catagory]);
        });
    });
    

}

setTimeout(function(){
    console.log(categorized);
},4000);