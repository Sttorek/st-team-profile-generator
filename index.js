// This Is Where main logic will lie

// considered entry point to application

// pageTemplate() is now a function
// const pageTemplate = require(`./src/page-template.js`);
const inquirer = require(`inquirer`);
const engineer = require(`./lib/Engineer`);
const intern = require(`./lib/Intern`);
const manager = require(`./lib/Manager`);


// must do inquirer in here

// This is where you do the fs write file
// The dist folder is where the output HTML files will land

const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team.html");

function runApp() {
  // ...Inquirer prompt and the functions that will ask users about manager, intern, and engineer.
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your position?',
      name: 'position',
    },
    {
      type: 'input',
      message: 'What is your ID?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your ID?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is your office number?',
      name: 'officeNum',
    },
    {
      type: 'input',
      message: 'What is your Github Username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What school did you study at?',
      name: 'school',
    },
  ])
  .then((response) => {
    if(response.position === "intern") {
      console.log("the value intern is recorded")
    } else if(response.position === "manager") {
      console.log("the value manager recorded")
    } else if(response.position === "engineer") {
      console.log("the value engineer recorded")
    } else {
      console.log("Please enter a valid work position. manager, engineer, or intern in lowercase.")
    }
  });
  function buildTeam() {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }
}
runApp();