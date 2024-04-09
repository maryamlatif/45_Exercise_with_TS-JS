/*     Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
//Making a function
function make_shirt(Size, Printmessage) {
    if (Size === void 0) { Size = "large"; }
    if (Printmessage === void 0) { Printmessage = "I love Typescript"; }
    console.log("Making a ".concat(Size, " shirt with  ").concat(Printmessage, "prints on shirt"));
}
//Calling a function with by default values
make_shirt();
//Calling a function now medium size with  default mwssage
make_shirt("medium");
//Calling a function now small size with different print message
make_shirt("small", "I love Coding");
