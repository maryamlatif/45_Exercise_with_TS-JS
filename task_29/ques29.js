"use strict";
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
Object.defineProperty(exports, "__esModule", { value: true });
let fav_fruite = ["apple", "kiwi", "mango"];
if (fav_fruite.includes("apple")) {
    console.log("I like apple very much");
}
if (fav_fruite.includes("mango")) {
    console.log("I like mango very much");
}
if (fav_fruite.includes("strawberry")) {
    console.log("I like strawberry very much");
}
if (fav_fruite.includes("orange")) {
    console.log("I like orange very much");
}
if (fav_fruite.includes("kiwi")) {
    console.log("I love kiwi very much");
}
