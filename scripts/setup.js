//Set up local storage
if (!localStorage.sticks){
  localStorage.sticks = JSON.stringify(new PopsicleSticks(classRosters));
}

var sticks = JSON.parse(localStorage.sticks);
var selectTag = document.getElementById("class-choice");

var optionTag, option, value;
for (var group in sticks){
  optionTag = document.createElement("option");
  value = document.createAttribute("value");
  value.value = group;                           // Set the value of the class attribute
  optionTag.setAttributeNode(value);

  option = document.createTextNode(group);
  optionTag.appendChild(option);
  selectTag.appendChild(optionTag);
}

var pickClass = function(){
  document.getElementById("picked").textContent=""
  var selClass = document.getElementById("class-choice");
  return selClass.value;
}
document.getElementById("pick").addEventListener("click", function () {
  var sticks = JSON.parse(localStorage.sticks);
  document.getElementById("picked").textContent= pickName(pickClass());

});

document.getElementById("clear-memory").addEventListener("click", function(){
  document.getElementById("picked").textContent=""
  delete localStorage.sticks;
  localStorage.sticks = JSON.stringify(new PopsicleSticks(classRosters));
  var selectTag = document.getElementById("class-choice");
  while (selectTag.firstChild) {
    selectTag.removeChild(selectTag.firstChild);
  }
  location.reload();
})
