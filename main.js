var screen = document.getElementById("screen");
var numchar, previousNum, currentNum;
var operations = ["-", "+", "/", "*", "%" , "."];



function display(c) {

  if(operations.includes(c) && screen.value.length== null){
    screen.value="";
  }
  screen.value += c;
  numchar = screen.value.length;
  currentNum = c;
  
  getPrevious();
  checkSyntax();
}

function clearScreen() {
  screen.value = "";
}

function clearElement() {
  screen.value = screen.value.slice(0, -1);
}

function equal() {
  screen.value = eval(screen.value);
}

function getPrevious() {
  previousNum = screen.value.substring(numchar - 2, numchar - 1);
}

function checkSyntax() {
  if (operations.includes(previousNum) && operations.includes(currentNum)) {
    if (previousNum == currentNum) {
      screen.value = screen.value.substring(0, numchar - 1);
    } else {
      screen.value =
        screen.value.slice(0, numchar - 2) + screen.value.slice(numchar - 1);
    }
  }

  if (previousNum == "." && currentNum == ".") {
    screen.value = screen.value.substring(0, numchar - 1);
  }

  

  if (previousNum == "/" && currentNum == "0") {
    screen.value = "A Sab7aan Lah 😅";
  }


  if(previousNum == ''  && operations.includes(currentNum)){
    screen.value = '';
  }

  

  
}
