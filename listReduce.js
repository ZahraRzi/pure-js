const person = ["BMW", "Benz", "Pride"];
let BMW = `<li>${person[0]}</li>`;
document.getElementById("list1").innerHTML = person.reduce((BMW, item) => BMW += `<li>${item}</li>`);