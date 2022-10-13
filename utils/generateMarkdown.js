// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license ==="No License") {
    return '';
  } 
  return 

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license ==="No License") {
    return '';
  } 
  return ' - [License](#license)'
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

  ## Usage
  ${data.usage}
  
${renderLicenseSection(data.license)}

  ## Questions
  GitHub: (https://github.com/${data.githubUsername})
  For questions, please feel free to contact me at ${data.email}
`;
}

module.exports = generateMarkdown;
