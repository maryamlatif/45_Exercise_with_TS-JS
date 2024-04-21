/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/

//TEST 1 :Tests for equality and inequality with strings

let fruite = "apple";
let upperCase = "APPLE";
let five = 5;
let seven = 7;
let ten = 10;
let twenty = 20;
let vegetable = ["potato", "tomato", "onion"];

//TRUE Value
console.log("\nfruite is equal to apple?");
console.log(fruite == "apple");

//FALSE Value
console.log("\nfruite is equal to apple?");
console.log(fruite != "apple");

//Test 2: Test using the lower case function

//TRUE Value
console.log("\nIS APPLE is equal to apple in lowercase?");
console.log(upperCase.toLowerCase() == "apple");

//FALSE Value
console.log("\nIS APPLE is not equal to apple in lowercase?");
console.log(upperCase.toLowerCase() != "apple");

//TEST 3: Numerical test

//TRUE equal to Value
console.log("\nFive is equal to 5?");
console.log(five == 5);
//FALSE Not equal to Value
console.log("\n Five is not equal to 5?");
console.log(five != 5);

//Greater then

console.log("\n 7 is  greater than 5");
console.log(7 > 5);

//Less then

console.log("\n 7 is  less than 5");
console.log(5 > 7);

//greater than or equal to

console.log("\n 7 is greater than or equal to 3");
console.log(7 >= 3);

//Less than or equal to

console.log("\n 7 is less than or equal to 3");
console.log(7 <= 3);

//Tests 4: using "and" and "or" operators

//using && (And)
console.log("\ntwenty is not equal to 10 && twenty is greater than 10 ");
console.log(twenty != 10 && twenty > 10);

console.log("\ntwenty is not equal to 10 && twenty is greater than 40 ");
console.log(twenty != 10 && twenty > 40);

//using || (OR)

console.log("\ntwenty is greater than 50 or twenty is equal to twenty");
console.log(20 > 50 || 20 == 20);

console.log("\ntwenty is greater than 50 or twenty is not equal to twenty");
console.log(20 > 50 || 20 != 20);

//Test whether an item is include in  array
console.log("\n Is onion is include in my Array");
console.log(vegetable.includes("onion"));

//Test whether an item is not include in  array
console.log("\n Is onion is not include in my Array");
console.log(!vegetable.includes("onion"));
