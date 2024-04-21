/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/



//EXERCISE 18

let places = ["Turkey", "london", "Dubai", "CapeTown", "India"];
let sortedPlaces = [...places].sort();

console.log("Orignal order of places to visit");
console.log(places);

console.log("Array in alphabetical order:");
console.log(sortedPlaces);

let reverseplaces = [...places].sort().reverse();
console.log("Reverse the order of your list.");
console.log(reverseplaces);

console.log("Orignal order of places to visit"); //again
console.log(places);

console.log("Reverse the order of your list. ");
console.log(places);
sortedPlaces = [...places].sort();

places.reverse();
console.log("Reverse the order of your list. "); //again
console.log(places);


places.sort();
console.log("Array in alphabetical order:");
console.log(places);


places.sort().reverse();
console.log("Array in reverse alphabetical order:");
console.log(places);
