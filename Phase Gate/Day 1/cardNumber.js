
function checkNumber(number) {
	let check = {valid: true, issuer: ""};
	if(number.length < 15){
		check.valid = false
		delete check.issuer;
		check.reason = "Invalid length";
	}
	
	else if(number.length === 15) {
		switch(number[0]){
			case 3: check.issuer = "America Express"
				break;
			default:
				check.valid = false;
				delete check.issuer;
				check.reason = "Unknown card number";
		}
	}
	
	else {
		switch(number[0]){
			case 4: check.issuer = "Visa"
				break;
			case 5: check.issuer = "Mastercard"
				break;
			case 6: check.issuer = "Discover"
				break;
			default:
				check.valid = false;
				delete check.issuer;
				check.reason = "Unknown card number";
		}
	}
	return check;
}
