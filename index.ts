#! /usr/bin/env node

import inquirer from "inquirer";

// asking question from users through inquirer 
let answers = await inquirer.prompt([
    {message: "Enter first number", type: "number", name: "firstNumber"},
    {message: "Enter second number", type: "number", name: "secondNumber"},
    {message: "select one operator to perform operations",
type: "list",
name: "operator",
choices: ["Addition", "Subtractions", "Multiplication", "Division"],
},
]);

// Conditional statement if-Else

if (answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}

else if (answers.operator === "Subtractions"){
    console.log(answers.firstNumber - answers.secondNumber)
}

else if (answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}

else if (answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}

