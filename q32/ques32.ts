/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

//creating a variable

//Array of current users
let current_users = ["Fatima", "Areeba", "Umar", "ali", "Kainat"];
//Array of new users
let new_users = ["Sadaf", "Waqas", "Ali", "Areeba", "Hania"];
//Loop through new users to check the usernames availiblity
new_users.forEach((new_one) => {
  //Making a condition for user name already exist save in our newCondition
  let newCondition = current_users.some(
    (current_users) => current_users.toLowerCase() === new_one.toLowerCase()
  );
  if (newCondition) {
    console.log(`Sorry! ${new_one} is  already taken`);
  } else {
    console.log(`This user name  ${new_one} is available`);
  }
});
