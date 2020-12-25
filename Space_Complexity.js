function boooo(n) {
	for (let i = 0; i < n.length; i++) {
		console.log("boo00!");
	}
}

// What is the space complexity of this code above?
// space complexity = think about 'additional space'
// so we don't really care how big the input is.

// Are we adding any space? - let i = 0;
// in space complexity: O(1)

function arrayOfHiNTimes(n) {
	let hiArray = [];
	for (let i = 0; i < n; i++) {
		hiArray[i] = "hi";
	}

	return hiArray;
}

// Creating new array and filling this with loops.
// O(n);
