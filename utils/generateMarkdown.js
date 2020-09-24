// function to generate markdown for README
function generateMarkdown(answer) {
  return `
  ## ${answer.title}

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Credits](#credits)
  * [Tests](#tests)
  * [Questions](#questions)

  
  ## Description

  ${answer.description}

  ## Installation

  ${answer.installation}

  ## Usage

  ${answer.usage}

  ## License

  This project is licensed under the ![shield](https://img.shields.io/static/v1?label=License&message=${answer.license}&color=green)
  

  ## Credits

  ${answer.credits}

  ## Tests

  ${answer.tests}

  ## Questions

  If you have any questions, check out my github (Username:${answer.questions})

  Or reach out directly at: ${answer.email}
`;
}

module.exports = generateMarkdown;
