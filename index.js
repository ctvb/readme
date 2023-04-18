const inquirer = require("inquirer");
const fs = require("fs")
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")

// QUESTIONS FOR INPUT
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
        type: 'input',
        message: 'What is the deployed link?',
        name: 'link',
    },
    {
        type: 'list',
        message: 'What kind of license?',
        choices: ['MIT', 'GPL', 'Unlicensed'],
        name: 'license',
    }
];

// WRITES INPUT TO FILE
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers)
        writeToFile("Readme.md", generateMarkdown(answers))
    })
}

init();
