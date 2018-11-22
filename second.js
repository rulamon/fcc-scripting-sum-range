function sumAll(arr) {
	let sum = 0;	
	for (let x = Math.min(...arr); x <= Math.max(...arr); x++) {
		sum += x;
		};
	//spread range
	return sum;
}

console.log(sumAll([10, 5]));