// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(
      license
    )})`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://lbesson.mit-license.org/`;
  }
  if (license === "GPL") {
    return `http://perso.crans.org/besson/LICENSE.html`;
  }
  if (license === "CC--0") {
    return `https://creativecommons.org/licenses/by-nd/4.0`;
  }
  if (license === "none") {
    return " ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    ${license}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.licenses)}

## Table of Contents:
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage of Project)
* [Licenses]()
* [Questions/Contact](Questions? Contact Me!)
* [Project Links](Project Links)

## Description

${data.description}



## Installation

${data.instructions}



## Usage of Project

${data.usage}



${renderLicenseSection(data.licenses)}



## Questions? Contact Me!

Email: ${data.email}
Github: https://github.com/${data.github}



## Project Links 

Live Site: ${data.livesite}
Github Link: ${data.project}

`;
}

module.exports = generateMarkdown;
