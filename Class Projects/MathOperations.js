const prompt = require("prompt-sync")();
let leftOperand = Number(prompt("First number: ").trim());
console.log();
let operator = prompt("+, -, *, /: ").trim(); 
console.log();
let rightOperand = Number(prompt("Second number: ").trim()); 

let ans;

switch(operator) {
	case "+": ans = leftOperand + rightOperand; 
		console.log(`${leftOperand} + ${rightOperand} is ${ans}`); break; 
		
	case "-": ans = leftOperand - rightOperand;
		console.log(`${leftOperand} - ${rightOperand} is ${ans}`); break;
		
	case "*": ans = leftOperand * rightOperand; 
		console.log(`${leftOperand} * ${rightOperand} is ${ans}`); break;
		
	case "/": ans = leftOperand / rightOperand;
		console.log(`${leftOperand} / ${rightOperand} is ${ans}`); break;
		
	default: console.log(NaN);
}