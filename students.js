var fs = require('fs');

var students = fs.readFileSync('./student.txt').toString().split('\n');
console.log(students);
fs.writeFile('list.js', "var students =" + JSON.stringify(students), function(err){
  if (err) throw err;
  console.log('success!');
});
