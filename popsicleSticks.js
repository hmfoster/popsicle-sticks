var PopsicleSticks = function(studentsArray){
  this.students = studentsArray;
  this.toPickFrom = [];
};

PopsicleSticks.prototype.shuffleNames = function(){
  //shuffle array of names, 
  for (var i = 0; i < this.students.length; i++) {
    var index = Math.floor(Math.random()*(this.students.length-i)+i);
    var temp = this.students[i];
    this.students[i] = this.students[index];
    this.students[index] = temp;
  };
  return this.students.slice(0);
};

PopsicleSticks.prototype.pickName = function(){
  //if toPickFrom is empty, create it from shuffleNames
  if(!this.toPickFrom.length){
    this.toPickFrom = this.shuffleNames();
  }
  return this.toPickFrom.pop()
  //pop off and return the last name from toPickFrom
};

var sticks = new PopsicleSticks(students);
console.log(sticks.pickName());
var form = document.getElementById("form-id");

document.getElementById("pick").addEventListener("click", function () {
  document.getElementById("picked").textContent=sticks.pickName();
});
