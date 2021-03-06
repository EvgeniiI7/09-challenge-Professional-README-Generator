// TODO: Include packages needed for this application
const { clear } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (required)',
        validate: title => {
            if (title) return true; //is return needed?
            console.log('You must enter a title for your project');
            return false;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a description of your project (required).',
        validate: description => {
            if (description) return true;
            console.log('You must enter a description');
            return false;
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install the project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the project licence type? (required)',
        choices: [
            'GNU AGPLv3',
            'GNU GPLv3',
            'Mozilla Public License 2.0',
            'Apache License 2.0',
            'MIT License',
            'Boost Software License 1.0',
            'The Unlicense'
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What is the contribution guideline?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test examples for this project'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username (required)',
        validate: username => {
            if (username) return true;
            console.log('Please enter your GitHub username');
            return false;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address (required)',
        validate: email => {
            if (email) return true;
            console.log('You must enter your email address');
            return false;
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) return console.log(`Error: ${err}`);
        console.log('File successfully written!');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            writeToFile('./dist/README.md',generateMarkdown(data)) 
        });
}

// Function call to initialize app
init();