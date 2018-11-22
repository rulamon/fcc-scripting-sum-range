function sumAll(arr) {
	let rangeArr = [];	
	for (let x = Math.max(...arr) - Math.min(...arr); x >= 0; x--) {
			rangeArr.push(Math.max(...arr) - x);
		};
	//spread range
	return rangeArr.reduce((a, b) => a + b);
}

console.log(sumAll([10, 5]));