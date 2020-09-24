var inquirer = require("inquirer");
var fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");


inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
        default: "An awesome project"
    },
    {
        type: "input",
        message: "Enter a description for the project?",
        name: "description",
        default: "An awesome project"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation",
        default: "None"
    },
    {
        type: "input",
        message: "Provide instructions and examples for use.",
        name: "usage",
        default: "None"
    },
    {
        type: "list",
        message: "Choose from the following licenses",
        name: "license",
        choices: [
            "MIT",
            "APACHE-2.0",
            "GPL-3.0",     
            "BSD-3"
        ],
        default: "MIT"
    },
    {
        type: "input",
        message: "List any collaborators, third-party assets that require attribution, or tutorials used.",
        name: "credits",
        default: "None"
    },
    {
        type: "input",
        message: "Write tests for your application. Then provide examples on how to run them.",
        name: "tests",
        default: "None"
    },
    {
        type: "input",
        message: "Enter your Github username.",
        name: "questions",
        default: "andbret"
    },
    {
        type: "input",
        message: "Enter your email.",
        name: "email",
        default: "and.bretnall@gmail.com"
    }
]) 

.then ((answer) => {
        
          var filename = answer.title+ ".md";
        

          return fs.writeFileSync(filename, generateMarkdown(answer), function(err) {
        
            if (err) {
              return console.log(err);
            }
        
            console.log("Success!");
        
          });
        });
//         function generateMarkdown(answer) {
//             return `
// ## ${answer.title}
          
// * [Description](#description)
// * [Installation](#installation)
// * [Usage](#usage)
// * [License](#license)
// * [Credits](#credits)
// * [Tests](#tests)
// * [Questions](#questions)
          
            
// ## Description
          
// ${answer.description}
          
// ## Installation
          
// ${answer.installation}
          
// ## Usage
          
// ${answer.usage}
          
// ## License
          
// ${answer.license}
          
// ## Credits
          
// ${answer.credits}
          
// ## Tests
          
// ${answer.tests}
          
// ## Questions
          
// ${answer.questions}
          
// ${answer.email}
        //   `;
        //   }
//    fs.writeFile("MYREADME.md", generateMarkdown(answer), function(err) {

//     if (err) {
//       return console.log(err);
//     }
  
//     console.log("Success!");
  
//   });


