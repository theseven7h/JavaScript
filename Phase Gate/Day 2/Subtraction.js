const input = require("prompt-sync");
const prompt = input();

const check = function(num1,num2,diff) {
	return num1 - num2 == diff;	
}

let correct = 0;
for(let count = 1; count <= 10; count++) {
	let num1 = Math.round(Math.random() * 21);
	let num2 = Math.round(Math.random() * 21);
	while (num1 < num2) {
		num1 = Math.round(Math.random() * 21);
		num2 = Math.round(Math.random() * 21);
	}
	
	for(let i = 1; i <= 2; i++) {
		diff = Number(prompt(`${num1} - ${num2} = `))
		if (check(num1,num2,diff) === true) {
			console.log("Correct!\n")
			correct++;
			break;
		}
		console.log()
		if (i === 1) {
			console.log("One more try!");
			continue;
		} else console.log("Wrong!");
	}
}

console.log(`Total score = ${correct}/10`);