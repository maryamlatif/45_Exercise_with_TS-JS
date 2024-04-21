"use strict";
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//Print a message to each of the two people still on your list, letting them know they’re still invited.
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program
//exercise 17 
let Guests = ['Umar', 'Fatima', 'Areeba'];
console.log("Welcome all! We found a big table.");
Guests.unshift("Hina");
Guests.push("Hani");
// Printing initial invitations
Guests.forEach(invitee => {
    console.log(`Hello, ${invitee}! You're invited for dinner tomorrow at my place.`);
});
console.log("\nUnfortunately, due to a change in arrangements, we can only invite 2 people for dinner.\n");
// Removing extra guests and informing them
while (Guests.length > 2) {
    let removedGuest = Guests.pop();
    console.log(`Sorry, ${removedGuest}! We can't invite you for dinner. Thank you for your understanding.`);
}
// Informing the remaining guests
Guests.forEach(guest => {
    console.log(`Hey ${guest}! You're still invited to dinner.`);
});
// Drop guest list
Guests.splice(0, Guests.length);
console.log(Guests); // Should print: []
