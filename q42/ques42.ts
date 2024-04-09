/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/

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
let great_magician =make_great(magician_name)

//Call show_magician function that show modified list of magician.
show_magicians(great_magician);