// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions that gathers user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your application?',
        name: 'title',
        default: 'Enter Title',
    },
    {
        type: 'input',
        message: 'Please provide a description of your application:',
        name: 'description',
        default: 'Enter Description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions. If no installation required please enter "N/A":',
        name: 'installation',
        default: 'Enter Installation Instructions',
    },
    {
        type: 'input',
        message: 'Please provide usage instructions for the user. If no usage instructions please enter "N/A":',
        name: 'usage',
        default: 'Enter Usage Instructions',
    },
    {
        type: 'checkbox',
        message: 'Please select License Information:',
        name: 'license',
        choices: ['Apache2.0', 'BSD2', 'BSD3', 'EPL1.0', 'GPLv3', 'MIT', 'MPL2.0', 'Perl', 'None'],
    },
    {
        type: 'input',
        message: 'Please list all Contributors for your project:',
        name: 'contributing',
        default: 'Contributors',
    },
    {
        type: 'input',
        message: 'Please include a link to the application:',
        name: 'link',
        default: 'Enter Link to Application',
    },
    {
        type: 'input',
        message: 'Please include test information for application if applicable. If no test information please enter "N/A":',
        name: 'tests',
        default: 'Enter Test Information',
    },
    {
        type: 'input',
        message: 'Please enter your Name:',
        name: 'name',
        default: 'Your Name Here',
    },
    {
        type: 'input',
        message: 'Please enter your email address:',
        name: 'email',
        default: "Email Address",
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username:',
        name: 'gitHub',
        default: "GitHub Username",
    },
];    
        
// This function writes the README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// This function initializes the application
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Professional README File Generating . . .");
        writeToFile('./final/README.md', generateMarkdown({...responses}));
    });
}

// Function call to initialize app
init();
