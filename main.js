let displayValue ="";
let tailValue = "";
// The two main displays 
const operationTail = document.querySelector("#operationTail");
const resultDisplay = document.querySelector("#result");

// Buttons query
    //operators
const divisionButton = document.querySelector("#division");
const cEverythingButton = document.querySelector("#clearEverything");
const clearButton = document.querySelector("#clear");
const delButton = document.querySelector("#delete");
const multiplyButton = document.querySelector("#multiplication");
const minusButton = document.querySelector("#minus");
const plusButton = document.querySelector("#plus");
const changeSymbol = document.querySelector("#changeSymbol");
const floatingPoint = document.querySelector("#floatingPoint");
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

for (let i=0; i<arrayNumBut.length; i++){
    arrayNumBut[i].addEventListener("click", function(){
        updateDisplay(i);
    })
}

document.addEventListener('keydown', e => {
    let code;
    if (e.key !== undefined) {
        code = e.key;
      } else if (e.keyIdentifier !== undefined) {
        code = e.keyIdentifier;
      } else if (e.keyCode !== undefined) {
        code = e.keyCode;
      }
      console.log(code);
      if (code === "."){
        updateDisplay(".");
      }
      else if (Number.isNaN(Number(code))){
      } else {
        updateDisplay(code);
      }
      
}, false);


//operation fuctions
function addition(numA,numB){
    return numA+numB;
}
function substraction(numA,numB){
    return numA-numB;
}
function division(numA,numB){
    return Float(numA/numB);
}
function multiplication(numA,numB){
    return numA*numB;
}
function substraction(numA,numB){
    return numA-numB;
}
function substraction(numA,numB){
    return numA-numB;
}



function calculate(operator, numA, numB){
    if (operator === "sum"){
        return addition(numA,numB);
    }
}

function updateDisplay(item){
    displayValue+=item;
    resultDisplay.textContent = displayValue;
}

function updateTail(){
    operationTail.textContent = tailValue;
}
