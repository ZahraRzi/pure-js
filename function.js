var message = "This is message";

// model function: void
function showAlert(
  message = "Some Error Happened!!! :(",
  afterShowAlert = function () {}
) {
  alert(message.toUpperCase());
  afterShowAlert(message);
  console.log("asdfasdf");
}

// showAlert("passed messages");

// model function: pure
function sum(numbers) {
  return numbers.reduce(function (total, number) {
    total += number;
    return total;
  }, 0);
}

function random() {
  return Math.random();
}

function average(numbers) {
  const calculated = sum(numbers) / numbers.length;
  showAlert(`The average is: ${calculated}`, function (message) {
    showAlert(`call back called with ${message} message :)`);
  });
  return calculated;
}

const scoresAverage = average([1, 4, 10]);

const randomNumber = random();

console.log(scoresAverage, "scoresAverage");
console.log(randomNumber, "randomNumber");

function test() {
  return sum;
}

console.log(test()([1, 2, 3]));
