// const person = ["BMW", "Benz", "Pride"];
// let BMW = `<li>${person[0]}</li>`;
// document.getElementById("list1").innerHTML = person.reduce((, item) => BMW += `<li>${item}</li>`);

// persons constant is available here because listLoop.js loaded before this file and const has been declared.

document.getElementById("list1").innerHTML = persons.reduce((list, person) => {
  list += `<li>${person} <== via reduce</li>`;
  return list;
}, "");
