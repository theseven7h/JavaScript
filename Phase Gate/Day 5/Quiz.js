const getQuestions = function(num) {
	return questions[num].q;	
}

const shuffleQuestions = function() {
	let qnum = [];
	let count = 0;
	while(qnum.length < 10) {
		let num = Math.round((Math.random() * 9) + 1);
		if(qnum.includes(num)) continue;
		questions[count] = questions[num]; 
		qnum.push(num);
		count++;
	}
}

const checkAnswer = function(answer, questions, userChoice) {
	let message = "Incorrect"; 
	if(questions[userChoice - 1].ans === answer) message = "Correct";
	return message;
}

const qCheck = function(userChoice, removeQuestions) {
	let count = 0;
	let msg = "";
	let i = 0;
	for(; i < removeQuestions.length; i++) {
		if(removeQuestions[i] == userChoice) {
			count++;
		}
		else msg += removeQuestions[i] + " ";
	}
	if (count == 2) {
		console.log("Available questions are " + msg) 
		return "Number already taken";
	}
	return "";
}

const input = require("prompt-sync");
const prompt = input();

let questions = [
{"q": "1 + 1\na) 2\nb) 4\nc) 7\nd) 3", "ans": "a"},
{"q": "1 + 2\na) 2\nb) 3\nc) 1\nd) 4", "ans": "b"},
{"q": "1 + 3\na) 2\nb) 12\nc) 4\nd) 3", "ans": "c"},
{"q": "1 + 4\na) 2\nb) 4\nc) 7\nd) 5", "ans": "d"},
{"q": "1 + 5\na) 6\nb) 4\nc) 7\nd) 3", "ans": "a"},
{"q": "1 + 6\na) 2\nb) 7\nc) 8\nd) 3", "ans": "b"},
{"q": "1 + 7\na) 2\nb) 4\nc) 8\nd) 3", "ans": "c"},
{"q": "1 + 8\na) 2\nb) 4\nc) 7\nd) 9", "ans": "d"},
{"q": "1 + 9\na) 10\nb) 4\nc) 7\nd) 3", "ans": "a"},
{"q": "1 + 10\na) 2\nb) 11\nc) 7\nd) 3", "ans": "b"},	
];

let removeQuestions = ["1","2","3","4","5","6","7","8","9","10"];
let wrongCount = 0;
let rightCount = 0;
let userChoice = "";
let repeat = "";

while(repeat != "no") {
	while(String(userChoice) != "0") {
		userChoice = prompt("Choose question number (1-10) or 0 to quit: ");
		check = qCheck(userChoice, removeQuestions);
		
		if(userChoice == 0) break;
		
		while(userChoice < 1 || userChoice > 10 || check != "") {
			if(userChoice >= 1 || userChoice <= 10) {
				console.log(check);
			}
			userChoice = prompt("Choose question number (1-10): ");
			check = qCheck(userChoice, removeQuestions);
		}
		removeQuestions.push(userChoice);
		
		console.log(getQuestions(userChoice - 1));
		let ans = prompt().trim();
		
		let message = checkAnswer(ans, questions, userChoice);
		console.log(message);
		let count = 2;
		while(message !== "Correct") {
			if(count === 0) break;
			console.log("You have " + count + " tries left");
			console.log(getQuestions(userChoice - 1));
			ans = prompt().trim();
			while(!["a","b","c","d"].includes(ans)) {
				console.log(getQuestions(userChoice - 1));
				ans = prompt().trim();
			}
			message = checkAnswer(ans, questions, userChoice);
			console.log(message);
			count--;
		}
		
		if(count == 2) rightCount++;
		else wrongCount++;	
	}
	let repeat = "";
	while(true) {
		repeat = prompt("Do you wish to continue (Yes/No): ").trim();
		
		if(repeat === "yes" || repeat === "no") break;
		else console.log("Invalid! Yes/No");
		console.log();
	}
	
	if (repeat === "no") break;
}

console.log("Correct: " + rightCount);
console.log("Missed: " + wrongCount);

