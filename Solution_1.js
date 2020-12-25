// What is the Big O of the below function?
function funChallenge(input) {
	let a = 10; // O(1)
	a = 50 + 3; // O(1)

	for (let i = 0; i < input.length; i++) {
		//O(input) === O(n)
		anotherFunction(); // O(n)
		let stranger = true; // O(n)
		a++; // O(n)
	}
	return a; // O(1)
}

// 3 + n + n + n + n
// 3 + 4n
// BIG O(3 + 4n)
// O(n)
