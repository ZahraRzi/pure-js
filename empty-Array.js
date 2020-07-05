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
  if (input.value) {
    toDoList.push(input.value);
    listElement.innerHTML = generateList(toDoList);
    input.value = "";
  } else {
    alert("no empty value");
  }
});
