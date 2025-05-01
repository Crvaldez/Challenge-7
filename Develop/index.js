// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (input) => input ? true : 'Please enter a title for your project.'
             
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
        validate: (input) => input ? true : 'Please enter a description for your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        validate: (input) => input ? true : 'Please enter installation instructions for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is this project used for?',
        validate: (input) => input ? true : 'Please enter usage information for your project.'
    },
    {
        type: "input",
        name: 'contributing',
        message: 'What are the contribution guidelines for this project?',
        validate: (input) => input ? true : 'Please enter contribution guidelines for your project.'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error('There was an error writing the README:', err);
        } else {
             console.log('README.md successfully generated.');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    });     
}

// Function call to initialize app
init();
