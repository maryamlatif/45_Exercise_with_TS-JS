/*    Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/

//Define a function to prints the name of each magician in the array

function show_magicians(magicians:string[]){

    magicians.forEach(name=>console.log(name))
}

//Creating an Arry containing the magicians name
let magician_name=["Alistair the Amazing","Azura, the Arcane","Archimedes the Astonishing","Azura, the Arcane"]

//Call the function to print each nmagician name
show_magicians(magician_name)