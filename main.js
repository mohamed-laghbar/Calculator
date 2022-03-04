var screen = document.getElementById("screen");

function display(c) {
  screen.value += c;
}

function clearScreen() {
  screen.value = "";
}

function clearElement() {
  screen.value = screen.value;
}

function equal() {
  screen.value = eval(screen.value);
}
