// function to generate markdown for README
function renderLicenseBadge(license) {
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

*[Usage](#usage)

${renderLicenseLink(data.license)}

`;
}

module.exports = generateMarkdown;
