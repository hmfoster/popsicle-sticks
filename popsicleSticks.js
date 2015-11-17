var PopsicleSticks = function(studentsArray){
  this.students = studentsArray;
  this.toPickFrom = [];
};

var shuffleNames = function(){
  //shuffle array of names, 
  var sticks = JSON.parse(localStorage.sticks);
  for (var i = 0; i < sticks.students.length; i++) {
    var index = Math.floor(Math.random()*(sticks.students.length-i)+i);
    var temp = sticks.students[i];
    sticks.students[i] = sticks.students[index];
    sticks.students[index] = temp;
  };
  return sticks.students.slice(0);
};
var pickName = function(){
  //if toPickFrom is empty, create it from shuffleNames
  var sticks = JSON.parse(localStorage.sticks)
  if(!sticks.toPickFrom.length){
    sticks.toPickFrom = shuffleNames();
  }
  var chosen =  sticks.toPickFrom.pop();
  localStorage.sticks = JSON.stringify(sticks);
  console.log(JSON.parse(localStorage.sticks).toPickFrom);
  return chosen;
  //pop off and return the last name from toPickFrom
};
localStorage.sticks = JSON.stringify(new PopsicleSticks(students));
var form = document.getElementById("form-id");

document.getElementById("pick").addEventListener("click", function () {
  var sticks = JSON.parse(localStorage.sticks)
  document.getElementById("picked").textContent= pickName();
});
