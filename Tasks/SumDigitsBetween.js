		console.log("Enter a number(1 - 999): ")
		let number = require("readline");
		
		while (number < 1 || number > 999) {
			number = require("Enter a number(1 - 999): ")
		}
		
		let sum = 0;
		while (number != 0) {
			let digit = number % 10
			sum += digit
			number /= 10
		}
		console.log("Sum of the digit(s) is " + sum)