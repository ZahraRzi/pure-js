// const person = ["BMW", "Benz", "Pride"];
// let BMW = `<li>${person[0]}</li>`;

// for (let i = 1; i < person.length; i++) {
//   BMW += `<li>${person[i]}</li>`;
// }

// document.getElementById("list").innerHTML = BMW;

const persons = ["Hamed", "Zahra", "Hasti", "Mammad"];
let list = "";
for (let i = 0; i < persons.length; i++) {
  list += `<li>${persons[i]}</li>`;
}

document.getElementById("list").innerHTML = list;
