/*    Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/
//Define a function to prints the name of each magician in the array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Creating an Arry containing the magicians name
var magician_name = ["Alistair the Amazing", "Azura, the Arcane", "Archimedes the Astonishing", "Azura, the Arcane"];
//Call the function to print each nmagician name
show_magicians(magician_name);
