const person = ["BMW", "Benz", "Pride","Peugeot","Fiat"];
let BMW = `<li>${person[0]}</li>`;

for (let i = 1; i < person.length; i++) {
  BMW += `<li>${person[i]}</li>`;
}

document.getElementById("list").innerHTML = BMW;
 