"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//Add one new guest to the beginning of your array.
//Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
//question 16
//guest name
let Guests = ['Umar', 'Fatima', 'Areeba'];
let Notcome = "Umar";
//invite new guest
let Newguest = "Nide";
Guests[Guests.indexOf(Notcome)] = Newguest;
//sent message
// Guest.map((invite)=> console.log(`HELLO,${invite } you are invited for dinner tommorow at my place`));
console.log("wellcome all we found a big tabble.");
//newguest
Guests.unshift("Hina");
//middle guest
let middleguest = " Hania";
let middleindex = Guests.length / 2;
Guests.splice(middleindex, 0, middleguest);
// last guest
Guests.push("Umar");
//sent message one of each person
Guests.map((friend) => console.log(`\nHello! ${friend} tommorow you all are invited for dinner at my place`));
