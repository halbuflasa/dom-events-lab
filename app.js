/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
/*-------------------------------- Variables --------------------------------*/
let firstNumber ='';
let operation ='';
let secondNumber='';
/*------------------------ Cached Element References ------------------------*/

const DisplayEl = document.querySelector('.display');
/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.target.value = event.target.innerText;
    if (event.target.classList.contains('number') ) {
      if (operation === ''){
          firstNumber+=event.target.value;
          DisplayEl.textContent = firstNumber;
      }
      else {
       secondNumber +=event.target.value;
       DisplayEl.textContent = secondNumber;
      }
     }
     else if(['+','-','*','/'].includes(event.target.value)) {
           if(firstNumber!==''){
             operation=event.target.value;
             DisplayEl.textContent=firstNumber;
           }
 
     }
  });
});

calculator.addEventListener('click', (event) => {
  event.target.value = event.target.innerText;
  if(event.target.value=== '='){
    if(secondNumber !==''){
      let result = 0;
      switch (operation) {
        case '+':
          result = parseFloat(firstNumber) + parseFloat(secondNumber);
          break;
        case '-':
          result = parseFloat(firstNumber) - parseFloat(secondNumber);
          break;
        case '*':
          result = parseFloat(firstNumber) * parseFloat(secondNumber);
          break;
        case '/':
          result = parseFloat(firstNumber) / parseFloat(secondNumber);
          break;
      }
      DisplayEl.textContent = result;
      firstNumber = result.toString();
      operation = '';
      secondNumber = '';
    }
  }
  if(event.target.value==='C'){
    firstNumber = ''; 
      operation = ''; 
      secondNumber = '';
      DisplayEl.textContent='';
  }
});

