// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs")
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
// QUESTIONS TO ANSWER FOR THE README TO END UP WITH
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Give a brief description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is the purpose of this project?',
        name: 'purpose',
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'learn',
    },
    {
        type: 'checkbox',
        message: 'What languages were used for this project?',
        name: 'stack',
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'React', 'C', 'C#', 'C++']
    },
    {
        type: 'input',
        message: 'What challenges did you face?',
        name: 'challenges',
    },
    {
        type: 'input',
        message: 'What features does this project contain?',
        name: 'features',
    },
    {
        type: 'input',
        meassage: 'Who did you collaborate with?',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'What kind of license?',
        choices: ['MIT', 'GPL', 'Unlicensed'],
        name: 'license',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers)
        writeToFile("Pleasread.md", generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
