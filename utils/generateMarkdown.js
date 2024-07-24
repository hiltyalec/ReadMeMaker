// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const badges = {
      Apache2: '![License](https://img.shields.io/badge/License-Apache-License-2.0-blue.svg)',
      MIT: '![License](https://img.shields.io/badge/License-MIT-blue.svg)',
      GNUGPLv2: '![License](https://img.shields.io/badge/License-GNU-GPLv2-blue.svg)',
      GNUGPLv3: '![License](https://img.shields.io/badge/License-GNU-GPLv3-blue.svg)',
      LGPLv21: '![License](https://img.shields.io/badge/License-LGPLv21-blue.svg)',
      ISC: '![License](https://img.shields.io/badge/License-ISC-blue.svg)'
  
    }
    return badges[license]
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    const licenseLinks = {
      Apache2: '![License](https://img.shields.io/badge/License-Apache-License-2.0-blue.svg)',
      MIT: '![License](https://img.shields.io/badge/License-MIT-blue.svg)',
      GNUGPLv2: '![License](https://img.shields.io/badge/License-GNUGPLv2-blue.svg)',
      GNUGPLv3: '![License](https://img.shields.io/badge/License-GNUGPLv3-blue.svg)',
      LGPLv21: '![License](https://img.shields.io/badge/License-LGPLv2.1-blue.svg)',
      ISC: '![License](https://img.shields.io/badge/License-ISC-blue.svg)'
  
    }
    return licenseLinks[license]
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if(license) {
      return `Licensed under the ${renderLicenseLink(license)} license`
    } else {
      return ''
    }
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributiion](#contribution)
    - [Tests](#tests)
    - [License](#license)
    - [Questions](#questions)
  
    ## Description
    ${data.description}
  
    ## Installation
    ${data.installation}
  
    ## Usage
    ${data.usage}
  
    ## Contribution
    ${data.contribution}
  
    ## Tests
    ${data.tests}
  
    ## License
    ${renderLicenseSection(data.license)}
   
    ## Questions
    Reach me by email: ${data.email}
    Github username: ${data.username}
    Github Profile Link: ${data.link}
  `;
  }
  
  module.exports = generateMarkdown;
  