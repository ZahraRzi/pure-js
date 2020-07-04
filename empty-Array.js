
const input = document.getElementById("cars");
const listItems = document.getElementById("list2");
const btn = document.getElementById("btn");

let toDoList = [];
let z = input.value;
toDoList.push(z);
let i;

btn.addEventListener("onclick", function (event) {
  event.preventDefault();
  for (let i = 0; i < toDoList.length; i++) {
  z += `<li>${toDoList[i]}</li>`;
  }
   })

listItems.innerHTML = z;
