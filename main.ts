#! usr/bin/env node

import inquirer from "inquirer"
let todoList = [];

let condition = true;

while(condition)
{
let addTask = await inquirer.prompt(
    [
        {
            name: "todoList",
            message: "What you want to add in your todoList?",
            type: "input",
        }
        ,
        {
            name: "addMore",
            message: "Do you want to add more in your todoList?",
            type: "confirm",
            default: "true",
        },
    ],
)

todoList.push(addTask.todoList);
condition = addTask.addMore
console.log(todoList);
}