var fs = require('fs')
filenames = fs.readdirSync(".");
for (i = 0; i < filenames.length; i++) {
    console.log(filenames[i]);
}
console.log('Current uid: ' + process.getuid());

console.log("++++++++++++++++++++++++")

fs.readdir(".", function(err, m) {
    console.log(m);
    var i;
    for (i = 0; i < m.length; i++) {
        console.log(m[i]);
    }
});
console.log('Current uid: ' + process.getuid());