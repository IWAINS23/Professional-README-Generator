const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
{
    type: 'input',
    name: 'github',
    mesage:'What is your Github username?',

},
{
    type: 'input',  
    name: 'email',
    message:'What is your email?',
},
{
    type: 'input',  
    name: 'title',
    message:'What is your project name',
},
{
    type: 'input',  
    name: 'description',
    message:'Write a short description of your project',
},
{
    type: 'list',  
    name: 'license',
    message:'What license do you have',
    choices: ['MIT', 'GPL','APACHE 2.0'  ,'NONE'],
},
{
    type: 'input',  
    name: 'installation',
    message:'What command should be run to install dependancies',
    default: 'npm i'
},
{
    type: 'input',  
    name: 'test',
    message:'What command should be run to run test',
    default: 'npm test'
},
{
    type: 'input',  
    name: 'usage',
    message:'What does the user need to know about using the repo',
},
{
    type: 'input',  
    name: 'contributing',
    message:'What does the user need to know about contributing to the repo?',
},
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

// function to initialize program
function init() {
 inquirer.prompt(questions).then((response) => {
    console.log(`Generate README...`)
    writeToFile('README.md', generateMarkdown({...response}));
 }
 )
}

// function call to initialize program
init();
