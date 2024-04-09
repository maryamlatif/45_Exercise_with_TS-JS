/*City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/
//creating a function
function city_country(City, Country) {
    return "".concat(City, ",").concat(Country);
}
//Calling a function and print the return value
console.log(city_country("Australia", "Canberra"));
console.log(city_country("Argentina", "Buenos Aires"));
console.log(city_country("Belgium", "Brussels"));
