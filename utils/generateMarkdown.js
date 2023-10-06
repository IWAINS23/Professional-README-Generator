// function to generate markdown for README
const renderLicenseBadge = (license) => {
  if (license !== 'None') {
  return `![Github license](https://img.shields.io/badge/License-${license}-blue.svg)`
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

## License

This project is licensed under ${data.license}.

## Contributing

${data.contributing}

## Tests

to run tests, run the following command 

\`\`\`
${data.test}
\`\`\`

### questions

If you have any questions about teh repor, open an issue or contact me via email at ${data.email}

You can findmore of my work at [${data.github}](https://github.com/${data.github}).


`;
}

module.exports = generateMarkdown;
