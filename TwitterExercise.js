// Find 1st twits, Find Nth twits...
const array = ["hi", "my", "teddy"];
array[0]; // O(1)
array[array.length - 1]; // O(1);

// What if array is array of object?
const array = [
	{
		tweet: "hi",
		date: 2012,
	},
	{
		tweet: "my",
		date: 2013,
	},
	{
		tweet: "teddy",
		date: 2015,
	},
]; // We have to compare each item.
// O(n^2);

"asdfshdflk".length; // O(1) // because .length in JS is property, not function().
// -> So, important to understand how your language is working.
