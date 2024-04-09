/*Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.*/
//Creating a function.
function describe_city(City, Country) {
    if (Country === void 0) { Country = "Pakistan"; }
    console.log("".concat(City, " is in ").concat(Country));
}
//function called
describe_city("Karachi");
describe_city("Lahore");
describe_city("Azerbaijan", "Baku");
