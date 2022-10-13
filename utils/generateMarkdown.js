// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if (license ==="No License") {
  //   return '';
  // } 
  // return 
  const label = 'licenseTitle';
  let licenseOption = license;
  let message = '';
  let color = '';
  let badgeURL = '';

    switch (licenseOption) {
      case 'MIT':
        message = 'MIT';
        color = 'brightgreen';
        badgeURL = `https://img.shields.io/badge/${label}-${message}-${color}`;
        break;
      case 'Apache 2.0':
        message = 'Apache 2.0';
        color = 'critical';
        badgeURL = `https://img.shields.io/badge/${label}-${message}-${color}`;
        break;
      case 'GPL':
        message = 'GPL';
        color = 'blue';
        badgeURL = `https://img.shields.io/badge/${label}-${message}-${color}`;
        break;
      case 'BSD':
        message = 'BSD';
        color = 'orange';
        badgeURL = `https://img.shields.io/badge/${label}-${message}-${color}`;
        break;
      default:
        message = 'No License';
        color = 'inactive';
        badgeURL = `https://img.shields.io/badge/${label}-${message}-${color}`;
        break;
    }
    return badgeURL;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if (license ==="No License") {
  //   return '';
  // } 
  let licenseOption = license;

  switch (licenseOption) {
    case 'MIT':
      linkURL = 'https://opensource.org/licenses/MIT';      
      break;
    case 'Apache 2.0':
      linkURL = 'https://opensource.org/licenses/Apache-2.0';      
      break;
    case 'GPL':
      linkURL = 'https://opensource.org/licenses/GPL-3.0';
      break;
    case 'BSD':
      linkURL = 'https://opensource.org/licenses/BSD-3-Clause';
      break;  
    default:
      linkURL = 'NONE';
      break;
  }
  return linkURL;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // if (license ==="No License") {
  //   return '';
  // } 
  let licenseBadge = renderLicenseBadge(license);
  let licenseInfo = renderLicenseLink(license);
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

  ## Installation

  ## Usage
  ${data.usage}

  ## Contribution

  ## Test
  
${renderLicenseSection(data.license)}

  ## Credits

  ## Questions
  GitHub: (https://github.com/${data.githubUsername})
  For questions, please feel free to contact me at ${data.email}
`;
}

module.exports = generateMarkdown;
