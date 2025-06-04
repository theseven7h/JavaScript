const input = require("prompt-sync");
const prompt = input();

const checkName = function(names, empName) {
	let message = "Added!";
	for(let name in names) {
		if (name.equals(empName)) message = empName + " already exists!";
		names.push(empName); 
	}
	return message;
}
	
const addName = function(names, empName) {

	names.push(empName);	
}
	

while(true) {

	let menu = Number(prompt("\n1. Add Employee payroll\n2. View Employee Payroll\n3. Update Employee Payroll\n4. Exit"));
	let num = 1;
	console.log("This is ",menu);
	switch(menu) {
		case 1:
			while(true) {
				let empName = prompt("\nEnter Employee Name: ").trim();
				
				let message = checkName(names, empName); 
				
				console.log(message);
				if(!message.equals("Added!")) {
					 continue;
				}
				addName(names, empName);
				
				details = []
				
				let hours = 0;
				while(true) {
					hours = prompt ("Enter number of hours worked in a week: ");
					if(hours <= 40) break;
					else console.log("Hours cannot be greater than 40");
				}
				details.push(hours)
				
				let payrate = prompt("Enter hourly pay rate: ");
				details.push(payrate);
				
				let fedRate = prompt("Enter federal tax withholding rate: ");
				details.push(fedRate);
				
				let stateRate = prompt("Enter state tax withholding rate: ");
				details.push(stateRate);
				
				
				allDetails.push(details); 
				
				console.log("Employee payroll added");
				
				let repeat = "";
				while(true) {
					let repeat = prompt("\n\nDo you wish to continue adding (Yes/No): ").trim();
					
					if(repeat.equals("yes") || repeat.equals("no")) break;
					else console.log("\nInvalid! Yes/No");
					console.log();
				}
				
				if (repeat.equals("no")) break;	
					
			} break;
				
		case "2":  for(let i = 0; i < allDetails.length; i++) {
					let grossPay = allDetails[i][1] * allDetails[i][0];
					let fedWith = (allDetails[i][0] * allDetails[i][1] * (allDetails[i][2]/100));
					let stateWith = (allDetails[i][0] * allDetails[i][1] * (allDetails[i][3]/100));
					
					console.log();
					console.log("Employee name: " + names[i] + "\nHours Worked: " + allDetails[i][0] + "\nPay Rate: " + allDetails[i][1] + "\nPay Rate: " + allDetails[i][2] + "\nGross Pay: " + grossPay);
					
					console.log("Deductions: " + "\n\tFederal Withholding(" + allDetails[i][0] + "%): $" +  fedWith + "\n\tState Withholding(" + allDetails[i][3] + "%): $" + stateWith + "\n\tTotal Deduction: $" + (fedWith + stateWith) + "\nNet Pay: $" + (grossPay - (fedWith + stateWith)));
					
					let back = prompt("\n0. Back").trim;
					
					while(true) {
						if (back.equals("0")) break;
						else console.log("Invalid input!");
						back = prompt("\n0. Back");
					}
					
					console.log();
					console.log();
				
				} break;
		
		case "3": let name = prompt("\nEnter Employee Name: ").trim();
				let j = 99;
				for(let i = 0; i < names.length; i++) {
					if(name.equals(names[i])) {
						j = i;
					}
				}
				
				if (j !== 99) {
					details = [];
					
					let a = 0;
					while (true) {
						a = prompt("Enter number of hours worked in a week: ");
						if(a <= 40) break;
						else console.log("Hours cannot be greater than 40")
					}
					
					details.push(a);
												
					let b = prompt("Enter hourly pay rate: ");
					details.push(b);
					
					let c = prompt("Enter federal tax withholding rate: ");
					details.push(c);
					
					let d = prompt("Enter state tax withholding rate: ");
					details.push(d);
					
					
					allDetails[j] = details;
					
				} else {console.log("Name not found"); continue;} 
				console.log();
				
				let back = prompt("\n0. Back").trim;
					
				while(true) {
					if (back.equals("0")) break;
					else console.log("Invalid input!");
					back = prompt("\n0. Back");
				} break;
				
		case "4": System.exit(0);
				
		
				
		
		_: console.log("Invalid input");		
	}			
}
			
		

