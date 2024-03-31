#! /usr/bin/env node
import inquirer from "inquirer";
// Welcome Message
console.log("\n\tWelcome To The Number Guessing Game\n\t");
while (true) {
    // produce Random Number 
    const randomNum = Math.floor(Math.random() * 6 + 1);
    // user input
    const answer = await inquirer.prompt([
        {
            name: "userNumber",
            type: "number",
            message: "Guess a number between 1-6 :"
        }
    ]);
    // check the number
    if (answer.userNumber == randomNum) {
        console.log("\n\tCongratulation!! You Guessed a number");
        // play again message
        let playAgain = await inquirer.prompt([
            {
                name: "playMore",
                message: "\nWant to play more ( yes or no)? ".toLowerCase()
            }
        ]);
        console.log("");
        if (playAgain.playMore == "no" || playAgain.playMore == "n") {
            break;
        }
    }
    else {
        console.log(`\n\tYou guess a wrong number, the number is ${randomNum}\n`);
    }
}
