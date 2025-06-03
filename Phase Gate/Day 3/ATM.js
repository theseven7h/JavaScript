const withdraw = function(balance, amount){
	let message = "";
	amount = Number(amount);
	balance = Number(balance);
	if (amount > balance)
		message = "Insufficient funds";
	else if ((amount % 500) !== 0)
		message = "Invalid amount! Withdrawals must be in multiples of N500 or N1000";
	else if (amount > (balance * 0.90))
		message = "You cannot withdraw more than 90% of your balance";
	else if (amount <= 0) 	
		message = "Amount must be greater than N0";
	else if (amount > 20000)
		message = "You cannot exceed N20000 per transaction";
	else {
		balance = balance - amount - 100;
		message = "Transaction successful!";
	}
	return [message,balance];
}
	
const input = require("prompt-sync");
const prompt = input();
	
console.log();
let logs = [];
console.log("----Welcome to THE SEVENTH ATM----");
let balance = Number(prompt("Enter your account balance (above 0): "));
while (balance <= 0)
	balance = Number(prompt("Invalid! Enter your account balance (above 0): "));
while (true) {		
	console.log(`\nYour current balance: N${balance}`);
	
	let amount = Number(prompt("Enter withdrawal amount (multiples of 500 or 1000): "));
	let result = withdraw(balance, amount);
	message = result[0];
	balance = result[1];
	
	while (message != "Transaction successful!") {	
		console.log(message)
		amount = Number(prompt("Enter withdrawal amount (multiples of 500 or 1000): "));
		result = withdraw(balance, amount);
		message = result[0];
		balance = result[1];
	}
	
	let details = [message,amount,balance]
	console.log(`\n${details[0]}\nWithdrawal Amount: N${details[1]}\nWithdrawal Fee: N${100}\nRemaining Balance: N${details[2]}`)
		
	logs.push(details)
	
	let repeat = "";
	while (true) {
		repeat = prompt("Do you wish to make another withdrawal (Yes/No): ").toLowerCase().trim();
		if (["yes", "no"].includes(repeat))  break;
		else console.log("\nInvalid! Yes/No");
	}
		
	if (repeat === "no") { 
		console.log("\nThank you for using The Seventh Bank. Have a good day ^_^\n\n----TRANSACTION HISTORY----");
		
		for(let i = 0; i < logs.length; i++) {
			console.log(`\n${logs[i][0]}\nWithdrawal Amount: N${logs[i][1]}\nWithdrawal Fee: N${100}\nRemaining Balance: N${logs[i][2]}`)
		}
		break;
	}
}