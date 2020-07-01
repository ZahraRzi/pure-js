function getId(id) {
  return document.getElementById(id);
}

let elements = {
  number: getId("numbers"),
  increase: getId("incr"),
  decrease: getId("decr"),
};

let x = 0;

elements.increase.addEventListener("click", function () {
  elements.number.textContent = x++;
});

elements.decrease.addEventListener("click", function () {
  elements.number.textContent = x--;
});