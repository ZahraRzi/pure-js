let toDoList = [];

function getId(id) {
  return document.getElementById(id);
}

function generateList(array) {
  var result = "";
  for (let i = 0; i < array.length; i++) {
    result += `<li>
    <span>${array[i]}</span>
    <button>edit</button>
    <button>remove</button>
    </li>`;
  }
  return result;
}

getId("todoListForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var input = getId("cars");
  var listElement = getId("todoList");
  var input = input.value;
  const hasDuplicate = toDoList.find(function (listItem) {
    if (listItem.toLowerCase() === input.toLowerCase()) {
      return listItem;
    }
  });
  console.log(hasDuplicate, "<==");
  if (input && !hasDuplicate) {
    toDoList.push(input);
    listElement.innerHTML = generateList(toDoList);
  } else if (input && hasDuplicate) {
    alert("No duplicate value!");
  } else if (!input) {
    alert("No empty value!");
  } else {
    toDoList.push(input);
  }
  document.getElementById("todoListForm").reset();
});

console.log(toDoList);
