let displayValue = "";
let tailValue = "";
let bufferOperator = "";
let pendingOperation = false;
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
const equalButton = document.querySelector("#equal");

let arrayOperators = [];
arrayOperators.push(plusButton);
arrayOperators.push(minusButton);
arrayOperators.push(multiplyButton);
arrayOperators.push(divisionButton);
arrayOperators.push(equalButton);

for (let i = 0; i < arrayOperators.length; i++) {
  arrayOperators[i].addEventListener("click", function () {
    if (tailValue === "") {
      tailValue = Number(Number(displayValue).toFixed(5));
      updateTail();
      updateDisplay("");
    }
    if (arrayOperators[i].value === "Enter") {
      if (pendingOperation === true) {
        calculate(bufferOperator, tailValue, displayValue);
        updateDisplay("");
      }
    } else if (pendingOperation === true) {
      calculate(bufferOperator, tailValue, displayValue);
      updateBufferOperator(arrayOperators[i].value);
      pendingOperation = true;
    } else {
      updateBufferOperator(arrayOperators[i].value);
      pendingOperation = true;
    }
  });
}

const cEntryButton = document.querySelector("#clearEntry");
cEntryButton.addEventListener("click", function () {
  updateDisplay("");
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", function () {
  updateDisplay("");
  updateBufferOperator("");
  tailValue = "";
  updateTail();
  pendingOperation = false;
});
const delButton = document.querySelector("#delete");
delButton.addEventListener("click", function () {
  updateDisplay("del");
});

const changeSymbol = document.querySelector("#changeSymbol");
changeSymbol.addEventListener("click", () => {
  if (displayValue.charAt(0) === "-") {
    displayValue = displayValue.substring(1);
  } else {
    displayValue = "-" + displayValue;
  }
  resultDisplay.textContent = displayValue;
});

const floatingPoint = document.querySelector("#floatingPoint");
floatingPoint.addEventListener("click", processPoint);

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
    if (code === "Backspace") {
      updateDisplay("del");
    }
    if (code === "Delete") {
      updateDisplay("");
    }
    if (code === ".") {
      processPoint();
    } else if (
      code === "+" ||
      code === "-" ||
      code === "/" ||
      code === "*" ||
      code === "Enter"
    ) {
      if (tailValue === "") {
        tailValue = Number(Number(displayValue).toFixed(5));
        updateTail();
        updateDisplay("");
      }
      if (code === "Enter") {
        if (pendingOperation === true) {
          calculate(bufferOperator, tailValue, displayValue);
          updateDisplay("");
        }
      } else if (pendingOperation === true) {
        calculate(bufferOperator, tailValue, displayValue);
        updateBufferOperator(code);
        pendingOperation = true;
      } else {
        updateBufferOperator(code);
        pendingOperation = true;
      }
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
function multiplication(numA, numB) {
  return numA * numB;
}
function division(numA, numB) {
  return numA / numB;
}

function processPoint() {
  if (displayValue.includes(".")) {
  } else if (displayValue.length > 0) {
    updateDisplay(".");
  } else {
    updateDisplay("0.");
  }
}

function calculate(operator, numA, numB) {
  let result;
  if (displayValue === "") {
    pendingOperation = false;
  } else {
    if (pendingOperation === true && numA === "") {
      tailValue = displayValue;
      displayValue = "";
    }
    if (operator === "+") {
      result = addition(parseFloat(numA), parseFloat(numB));
    }
    if (operator === "-") {
      result = substraction(parseFloat(numA), parseFloat(numB));
    }
    if (operator === "*") {
      result = multiplication(parseFloat(numA), parseFloat(numB));
    }
    if (operator === "/") {
      result = division(parseFloat(numA), parseFloat(numB));
    }
    tailValue = Number(result.toFixed(5));
    pendingOperation = false;
    updateTail();
    updateDisplay("");
  }
}

function updateDisplay(item) {
  if (item === "") {
    displayValue = "";
  } else if (item === "del") {
    displayValue = displayValue.slice(0, -1);
    resultDisplay.textContent = displayValue;
  } else {
    displayValue += item;
  }
  resultDisplay.textContent = displayValue;
}

function updateTail() {
  operationTail.textContent = tailValue;
}
function updateBufferOperator(oper) {
  bufferOperator = oper;
  operandDisplay.textContent = bufferOperator;
  pendingOperation = true;
}
