// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license ==="No License") {
    return '';
  } 
  return `![License](https://img.shields.io/badge/license-${license}-lightgreen)`
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license ==="No License") {
    return '';
  } 
  
  return '- [License](#license)';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license ==="No License") {
    return '';
  } 
  
  return `
  ## License

  Application includes the ${license} license`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle} 
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation) 
  - [Usage](#usage) 
  - [Contribution](#contribution) 
  - [Test](#test) 
 ${renderLicenseLink(data.license)}
  - [Credits](#credits) 
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contribution

  ${data.contribution}

  ## Test

  ${data.test}
  
${renderLicenseSection(data.license)}

  ## Credits

  ${data.credits}

  ## Questions

  GitHub: [GitHub](https://github.com/${data.githubUsername})
  For questions, please feel free to contact me at ${data.email}
`;
}

module.exports = generateMarkdown;
