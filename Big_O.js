const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"];
const large = new Array(100000).fill("nemo");

function findNemo(array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === "nemo") {
			console.log("Found NEMO!");
		}
	}
}

findNemo(large); // O(n) --> Linear Time

const boxes = [0, 1, 2, 3, 4, 5];
function logFirstTwoBoxes(boxes) {
	console.log(boxes[0]); // O(1)
	console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // O(1) --> Constant Time

// 3. Different terms for inputs
// Log all paris of array
const boxes = ["a", "b", "c", "d", "e"];

function logAllPairsOfArray(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			console.log(array[i], array[j]);
		}
	}
}
// O(n * n)
// O(n^2) - Quadratic Time (Horrible)

// 4. Drop Non Dominants
function printAllNumbersThenAllPairsSums(numbers) {
	console.log("these are the numbers:");
	numbers.forEach(function (number) {
		// O(n)
		console.log(number);
	});

	console.log("and the are their sums:");
	numbers.forEach(function (firstNumber) {
		// O(n^2)
		numbers.forEach(function (secondNUmber) {
			console.log(firstNumber + secondNumber);
		});
	});
}
// O(n + n^2)
// O(n^2)
