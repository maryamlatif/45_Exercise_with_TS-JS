/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

*/

function show_magicians(magicians:string[]){

    magicians.forEach(name=>console.log(name))
}

//Function to make magician great through.map will modify array

function make_great(magicians:string[]){
    return magicians.map(names=>`The Great ${names}`)
}
//Creating an Arry containing the magicians name.
let magician_name=["Alistair the Amazing","Azura, the Arcane","Archimedes the Astonishing","Azura, the Arcane"]

//Call nmake_great function to nmodify magicians names.
//let great_magician =make_great(magician_name)

//Call show_magician function that show modified list of magician.
//show_magicians(great_magician);

//Making a copy of orignal copy array through .slice() function.

let copy_megician_name =magician_name.slice()
//Modifing the copied array to include "The Great" with their names
let copy_great = make_great(copy_megician_name)
//show  orignmal array
console.log("\nOrignal array\n");

show_magicians(magician_name)


//show copied array
console.log("\n Copied array\n");
 show_magicians (copy_great)
