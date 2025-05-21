for (let count = 1; count <= 100; count++) {

	if (count % 3 == 0) console.log("Fizz");
	if (count % 5 == 0 && count % 3 != 0) console.log("Buzz"); 
	if (count % 5 == 0 && count % 3 == 0) console.log("FizzBuzz"); 
	else if (count % 5 != 0 && count % 3 != 0) console.log(count);
}