// This Is Where main logic will lie

// considered entry point to application

// pageTemplate() is now a function
// const pageTemplate = require(`./src/page-template.js`);
const inquirer = require(`inquirer`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);
const Manager = require(`./lib/Manager`);
const Employee = require(`./lib/Employee`);


// must do inquirer in here

// This is where you do the fs write file
// The dist folder is where the output HTML files will land

const path = require("path");
const fs = require("fs");
const { exitCode } = require("process");
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const team = [];




function runApp() {
  // ...Inquirer prompt and the functions that will ask users about manager, intern, and engineer.
  buildManager();
  
  function buildManager() {
    inquirer
    .prompt([
      {
        type: 'input',
      message: 'Add the name of your Manager?',
      name: 'name',
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
      message: 'What is your office number?',
      name: 'officeNumber',
    },
  ])
  .then((response) => {
    const manager = new Manager(response.name, response.id, response.email,response.officeNumber)
    console.log(team)
      team.push(manager);
      whatNext();
  });
};



function buildEngineer() {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
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
      message: 'What is your Github username?',
      name: 'github',
    },
  ])
  .then((response) => {
    const engineer = new Engineer(response.name, response.id, response.email, response.github)
      team.push(engineer);
      whatNext();
  });
};




function buildIntern() {
  // questions that apply to intern
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
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
      message: 'What school did you graduate from?',
      name: 'school',
    }]) .then ((response) => {
      const intern = new Intern(response.name, response.id, response.email, response.school)
      team.push(intern);
      whatNext();
    })
}

function whatNext() {
  inquirer
  .prompt([
    {
      type: 'list',
      message: 'What do you want to do next?',
      name: 'next',
      choices: ['Add Intern', 'Add Engineer', 'all done']
    }]).then((response) => {
      if(answer.next === 'Add Intern') {
        buildIntern();
      } else if(answer.next === 'Add Engineer') {
        buildEngineer();

      } else {
        // buildTeam();
        console.log(team)
      }
    })
}

  function buildTeam() {
    
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }
}
runApp();