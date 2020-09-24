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

  ![shield](https://img.shields.io/static/v1?label=License&message=${answer.license}&color=green)
  

  ## Credits

  ${answer.credits}

  ## Tests

  ${answer.tests}

  ## Questions

  ${answer.questions}

  ${answer.email}
`;
}

module.exports = generateMarkdown;
