let runningTotal = 0;
let buffer = '0';
let previousOperator;
const screen = document.querySelector(".screen")

document.querySelector('.calc-buttons').addEventListener("click", function(event){
    buttonClick(event.target.innerText);
})

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
      handleSymbol(value);
    } else {
      handleNumber(value);
    }
    rerender();
  }

function handleNumber(value) {
    if (buffer === "0") {
      buffer = value;
    } else {
      buffer += value;
    }
  }

fucntion handleSymbol(value) {
    switch (value) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case "=":
            if (previousOperator === null)
            return;
    }
    flushOperation() 

}

function rerender(){
    screen.innerText = buffer;
}