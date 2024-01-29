// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your application?',
        name: 'title',
        default: 'Enter Title',
    },
    {
        type: 'input',
        message: 'Please provide a description of your application.',
        name: 'description',
        default: 'Enter Description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions. If no installation required please enter "N/A".',
        name: 'installation',
        default: 'Enter Installation Instructions',
    },
    {
        type: 'input',
        message: 'Please provide usage instructions for the user. If no usage instructions please enter "N/A"',
        name: 'usage',
        default: 'Enter Usage Instructions',
    },
    {
        type: 'input',
        message: 'Please list any credits and resources utilized on the application. This also includes any collaborations. If no resources used please enter "N/A"',
        name: 'credits',
        default: 'Enter Credits',
    },
    {
        type: 'input',
        message: 'Please include a screenshot of your application',
        name: 'screenshot',
        default: 'Include Screenshot'
    },
    {
        type: 'input',
        message: 'Please include a link to the application',
        name: 'link',
        default: 'Enter Link to Application'
    },
    {
        type: 'input',
        message: 'Please include License information',
        name: 'license',
        default: 'Enter License Information',
    },
];

// console.log(responses);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Professional ReadMe File Generating");
        writeToFile('./final/README.md', generateMarkdown({...responses}));
    });
}

// Function call to initialize app
init();
