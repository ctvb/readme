// GIVES THE LISENCE
function renderLicenseBadge(license) {if (license !== "None") {
  return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
}
return ''
}

// RETURNS LISENCE
function renderLicenseLink(license) {}

// RETURNS LISENCE TO README
function renderLicenseSection(license) {
  if (license) {
    return ""
  }
}

// GENERATES MARKDOWN FOR README
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
