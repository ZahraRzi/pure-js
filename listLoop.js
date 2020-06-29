const person = ["BMW", "Benz", "Pride"];
let BMW = `<li>${person[0]}</li>`;

for (let i = 1; i < person.length; i++) {
  BMW += `<li>${person[i]}</li>`;
  document.getElementById("list").innerHTML = BMW; // this line should be after loop, when the list is generated and finally render it in to the DOM.
}

// document.getElementById("list").innerHTML = BMW; <=== HERE
