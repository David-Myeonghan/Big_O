function findNemo(array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === "nemo") {
			console.log("Found NEMO!");
		}
	}
}

// Another way of makeing loop
const findNemo2 = (array) => {
	array.forEach((i) => {
		if (i === "nemo") {
			console.log("Found NEMO!");
		}
	});
};

// Another way of makeing loop
const findNemo3 = (array) => {
	for (let fish of array) {
		if (fish === "nemo") {
			console.log("Found NEMO!");
		}
	}
};
