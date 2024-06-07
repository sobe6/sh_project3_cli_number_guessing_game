#!/usr/bin/env node
import inquirer from "inquirer";
//computer will generate a random number
//user for guessing number
//compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
//console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "UserGuessNumber",
        type: "number",
        message: "Please guess a number between 1 - 6",
    },
]);
//conditional statement
if (answers.UserGuessNumber === randomNumber) {
    console.log("Congratulation! You guessed right number");
}
else {
    console.log("You guessed wrong number");
}
