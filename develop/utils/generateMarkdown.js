// This function renders the license badge
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
  } else if (license == 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license == 'MPL2.0') {
    return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)';
  } else if (license == 'Perl') {
    return '![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)';
  }
  return '';
}

// This function renders a link to the license
function renderLicenseLink(license) {
  if (license == 'Apache2.0') {
    return 'https://www.apache.org/licenses/LICENSE-2.0';
  } else if (license == 'BSD2') {
    return 'https://opensource.org/licenses/BSD-2-Clause';
  } else if (license == 'BSD3') {
    return 'https://opensource.org/licenses/BSD-3-Clause';
  } else if (license == 'EPL1.0') {
    return 'https://opensource.org/licenses/EPL-1.0';
  } else if (license == 'GPLv3') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license == 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license == 'MPL2.0') {
    return 'https://opensource.org/licenses/MPL-2.0';
  } else if (license == 'Perl') {
    return 'https://opensource.org/licenses/Artistic-2.0';
  }
  return '';
}

// This function renders phrase that explains what license is used in the application
function renderLicenseSection(license) {
  if (license != 'None') {
    return `${license} is the license for this application.`
  }
  return '';
}

// This function generates markdown for the README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

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
