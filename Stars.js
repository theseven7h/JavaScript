const input = require("prompt-sync");
const prompt = input();


for (let i = 1; i <= 10; i++) {
	let stars = "";
	k = 9;
	for (let j = 1; j <= i; j++) {
		stars += " ";
	}
	console.log(stars);
	
	for (j = 1; j <= i+k-1; j++) {
		console.log("*");
	}
}

