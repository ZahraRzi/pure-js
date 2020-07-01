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
  // return is not necessary here, you can remove it;
  // if you change the #numbers input to div, p or span, the below line should be change
  // Also in decrease action

  elements.number.textContent = x++;
});

elements.decrease.addEventListener("click", function () {
   elements.number.textContent = x--;
});