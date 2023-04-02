// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {if (license !== "None") {
  return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
}
return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
  [![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)](${data.url})
  ${data.descirption}
  ## tableofcontents
  * [purpose](#purpose)
  * [learn](#learn)
  * [stack](#stack)
  * [challenges](#challenges)
  * [credits](#credits)

  ---
  ## puropse
  ${data.purpose}
  ## learn
  ${data.learn}
  ## stack
  ${data.stack}
  ## license
  ${renderLicenseSection(data.license)}
  ## challenges
  ${data.challenges}
  ## credits
  ${data.credits}
`;
}

module.exports = generateMarkdown;
