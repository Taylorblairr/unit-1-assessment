const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Welcome to the password validator. Please input password", function(answer) {
    if (answer.length >= 10) {
      console.log("Password was successful. Welcome");
    } else {
      console.log("Password is incorrect. Please try again");
    }
  });