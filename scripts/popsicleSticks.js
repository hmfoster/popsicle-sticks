
var PopsicleSticks = function(groups){
  for (var group in groups){
    this[group] = groups[group];
    this[group].toPickFrom = [];
  }
};

var shuffleNames = function(group){
  //shuffle array of names,
  var sticks = JSON.parse(localStorage.sticks)[group];
  for (var i = 0; i < sticks.students.length; i++) {
    var index = Math.floor(Math.random()*(sticks.students.length-i)+i);
    var temp = sticks.students[i];
    sticks.students[i] = sticks.students[index];
    sticks.students[index] = temp;
  };
  return sticks.students.slice(0);
};
var pickName = function(group){
  //if toPickFrom is empty, create it from shuffleNames
  var sticks = JSON.parse(localStorage.sticks);
  if(!sticks[group].toPickFrom.length){
    sticks[group].toPickFrom = shuffleNames(group);
  }
  //pop off and return the last name from toPickFrom
  var chosen =  sticks[group].toPickFrom.pop();
  sticks[group].chosen = chosen;
  localStorage.sticks = JSON.stringify(sticks);
  console.log(JSON.parse(localStorage.sticks)[group].toPickFrom);
  return chosen;
};

var skip = function(group){
  var sticks = JSON.parse(localStorage.sticks);
  sticks[group].toPickFrom.unshift(sticks[group].chosen);
  localStorage.sticks = JSON.stringify(sticks);
  return pickName(group);
}