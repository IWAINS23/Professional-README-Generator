// function to generate markdown for README
const renderLicenseBadge = (license) => {
  if (license !== 'None') {
  return `![Github license]{https://img.sheilds.io/badges/license-${license}-blue.svg)`
}
return ''
}


const renderLicenseLink = (license) => {
  if(license !== 'None') {
    return `\n* [License](#license)\n`
  }
  return ''
}

function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

### Description 

${data.description}

### Table of contents

* [Installation](#installation)

* [Usage](#usage)

${renderLicenseLink(data.license)}

* [Contributing](#contributing)

* [Test](#test)

* [Questions](#questions)

## Installation

To install neccessary dependacies, run the following command

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

`;
}

module.exports = generateMarkdown;
