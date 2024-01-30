// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache2.0') {
    return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if (license == 'BSD2') {
    return '![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)';
  } else if (license == 'BSD3') {
    return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
  } else if (license == 'EPL1.0') {
    return '![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)';
  } else if (license == 'GPLv3') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)';
  } else if (license == 'IPL1.0') {
    return '![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)';
  } else if (license == 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license == 'MPL2.0') {
    return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)';
  } else if (license == 'Perl') {
    return '![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)';
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache2.0') {
    return 'https://www.apache.org/licenses/LICENSE-2.0';
  } else if (license === '')
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'None') {
    return `${license} is the license for this application.`
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Link](#link)
* [Tests](#tests)
* [Questions](#questions)
  

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
* ${renderLicenseBadge(data.license)}
* ${renderLicenseLink(data.license)}
* ${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Link
${data.link}

## Tests
${data.tests}

## Questions

* Name:
${data.name}
* Email Me:
${data.email}
* Access my GitHub Repository:
[${data.gitHub}](https://github.com/${data.gitHub}/)
`;
}

module.exports = generateMarkdown;
