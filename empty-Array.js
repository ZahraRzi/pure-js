let toDoList = [];

function getId(id) {
  return document.getElementById(id);
}

function generateList(array) {
  var result = "";
  for (let i = 0; i < array.length; i++) {
    result += `<li>${array[i]}</li>`;
  }
  return result;
}

// @todo
// 1. check for duplicate item => array methods
// 2. add remove button to generateList function => functions in js

getId("todoListForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var input = getId("cars");
  var listElement = getId("todoList");
  var input = input.value;
  if (input && toDoList.indexOf(input) == -1) {
    toDoList.push(input);
    listElement.innerHTML = generateList(toDoList);
  } else if (input && toDoList.indexOf(input) != -1) {
    alert("No duplicate value!");
  } else if (input = " ") {
    alert("No empty value!");
  } else {
    toDoList.push(input);
  }
  document.getElementById("todoListForm").reset();
  console.log(toDoList);
});
