/*let chess = " # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # ";*/

const prompt = require("prompt-sync")();
let number = Number(prompt("Enter size of board: "))

for (let count = 1; count <= number; count++) {
	let hash = "";
	if (count % 2 != 0) hash += " ";
	for (let count2 = 1; count2 <= number; count2++) {
		if (count2 % 2 != 0) hash += "#";
		else hash += " ";
	}
	console.log(hash);
}
//console.log(chess);