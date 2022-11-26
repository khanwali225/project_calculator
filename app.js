import inquirer from "inquirer";
let question = [{
        name: "operator",
        type: "list",
        message: "what operation do you want to do?",
        choices: ["+", "-", "/", "*"]
    }, {
        name: "first",
        type: "number",
        message: "plz enter first number",
    }, {
        name: "second",
        type: "number",
        message: "plz enter second number"
    }];
let answer = await inquirer.prompt(question);
//console.log(answer.first + answer.operator + answer.second)
const userOperator = answer.operator;
const num1 = answer.first;
const num2 = answer.second;
if (userOperator === "+") {
    console.log(num1 + num2);
}
else if (userOperator === "-") {
    console.log(num1 - num2);
}
else if (userOperator === "*") {
    console.log(num1 * num2);
}
else if (userOperator === "/") {
    console.log(num1 / num2);
}
