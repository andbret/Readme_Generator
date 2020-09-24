// function to generate markdown for README
function generateMarkdown(answer) {
  return `
  ## ${data.title}

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Credits](#credits)
  * [Tests](#tests)
  * [Questions](#questions)

  
  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Credits

  ${data.credits}

  ## Tests

  ${data.tests}

  ## Questions

  ${data.questions}

  ${data.email}
`;
}

module.exports = generateMarkdown;
