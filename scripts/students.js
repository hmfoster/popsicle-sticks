var fs = require('fs');

var rosters = fs.readFileSync('students.txt').toString().split('CLASS');
var classRosters = {};
var name, students;
rosters.forEach(function(group){
  group = group.trim().split('\n');
  name = group[0];
  students = group.splice(1);
  if (name.length){
    classRosters[name] = {};
    classRosters[name].students = students;
  }
});
fs.writeFile('scripts/list.js', "var classRosters =" + JSON.stringify(classRosters), function(err){
  if (err) throw err;
  console.log('success!');
});
