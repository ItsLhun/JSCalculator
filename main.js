let displayValue = "";
let tailValue = "";
let floatingPressed = false;
let bufferOperator = "";
// The two main displays
const operationTail = document.querySelector("#operationTail");
const resultDisplay = document.querySelector("#result");
const operandDisplay = document.querySelector("#operand");

// Buttons query
//operators
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const multiplyButton = document.querySelector("#multiplication");
const divisionButton = document.querySelector("#division");

const cEverythingButton = document.querySelector("#clearEverything");
const clearButton = document.querySelector("#clear");
const delButton = document.querySelector("#delete");
const changeSymbol = document.querySelector("#changeSymbol");
const floatingPoint = document.querySelector("#floatingPoint");
floatingPoint.addEventListener("click", function () {
  if (floatingPressed === true) {
  } else {
    if (displayValue.length > 0) {
      updateDisplay(".");
      0;
      floatingPressed = true;
    } else {
      updateDisplay("0.");
      floatingPressed = true;
    }
  }
});

const equalButton = document.querySelector("#equal");
//numbers
const zeroButton = document.querySelector("#zero");
const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");
const threeButton = document.querySelector("#three");
const fourButton = document.querySelector("#four");
const fiveButton = document.querySelector("#five");
const sixButton = document.querySelector("#six");
const sevenButton = document.querySelector("#seven");
const eightButton = document.querySelector("#eight");
const nineButton = document.querySelector("#nine");

let arrayNumBut = [];
arrayNumBut.push(zeroButton);
arrayNumBut.push(oneButton);
arrayNumBut.push(twoButton);
arrayNumBut.push(threeButton);
arrayNumBut.push(fourButton);
arrayNumBut.push(fiveButton);
arrayNumBut.push(sixButton);
arrayNumBut.push(sevenButton);
arrayNumBut.push(eightButton);
arrayNumBut.push(nineButton);

for (let i = 0; i < arrayNumBut.length; i++) {
  arrayNumBut[i].addEventListener("click", function () {
    updateDisplay(i);
  });
}

document.addEventListener(
  "keydown",
  (e) => {
    let code;
    if (e.key !== undefined) {
      code = e.key;
    } else if (e.keyIdentifier !== undefined) {
      code = e.keyIdentifier;
    } else if (e.keyCode !== undefined) {
      code = e.keyCode;
    }
    console.log(code);
    if (code === ".") {
      if (floatingPressed === true) {
      } else {
        updateDisplay(".");
        floatingPressed = true;
      }
    } else if (
      code === "+" ||
      code === "-" ||
      code === "/" ||
      code === "*" ||
      code === "Enter"
    ) {
      bufferOperator = code;
    } else if (Number.isNaN(Number(code))) {
    } else {
      updateDisplay(code);
    }
  },
  false
);

//operation fuctions
function addition(numA, numB) {
  return numA + numB;
}
function substraction(numA, numB) {
  return numA - numB;
}
function division(numA, numB) {
  return Float(numA / numB);
}
function multiplication(numA, numB) {
  return numA * numB;
}
function substraction(numA, numB) {
  return numA - numB;
}
function substraction(numA, numB) {
  return numA - numB;
}

function calculate(operator, numA, numB) {
  let result;
  if (operator === "sum") {
    result = addition(numA, numB);
  }
  tailValue = result;
  updateTail();
}

function updateDisplay(item) {
  if (bufferOperator === "") {
    displayValue += item;
    resultDisplay.textContent = displayValue;
  } else {
    if (tailValue === "") {
      tailValue = displayValue;
      updateTail();
    }
  }
}

function updateTail() {
  operationTail.textContent = tailValue;
}
