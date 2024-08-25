// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from 'inquirer';
import path from "path";
import generateMarkdown from "./utils/generateMarkdown.js";


// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    name: "title",
    message: "Please name your Project.",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe the purpose and functionality of this project.",
  },
  {
    type: "input",
    name: "screenshot",
    message: "Please provide the relative path to the image you want to use as the screenshot."
  },
  {
    type: "input",
    name: "link",
    message: "Please provide a URL where a user can access your deployed application."
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: "input",
    name: "require",
    message: "List any project dependencies here.",
  },
  {
    type: "input",
    name: "features",
    message: "List some cool features about this project here.",
  },
  {
    type: "input",
    name: "usage",
    message:
      "State the languages or technologies associated with this project.",
  },
  {
    type: "input",
    name: "creator",
    message: "Write your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Provide a valid email address.",
  },
  {
    type: "input",
    name: "contributors",
    message: "Please list any contributors. (Use GitHub usernames)",
    default: "",
  },
  {
    type: "input",
    name: "test",
    message: "Provide walkthrough of required tests if applicable.",
  },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success! Your README.md file has been generated.")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log("Creating Professional README.md File...");
        
        // Ensure the dist directory exists
        const distDir = path.join(process.cwd(), 'dist');
        if (!fs.existsSync(distDir)) {
            fs.mkdirSync(distDir);
        }

        // Debugging: Log the answers to verify the license value
        console.log(answers);

        // Generate the markdown content
        const markdownContent = generateMarkdown({...answers});

        // Write the new README.md to the dist folder
        writeToFile("./dist/README.md", markdownContent);
    });
    
}

// Function call to initialize app
init();
