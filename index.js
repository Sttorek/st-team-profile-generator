// This Is Where main logic will lie

// considered entry point to application

// pageTemplate() is now a function
const pageTemplate = require(`./src/page-template.js`);
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
  ...Inquirer prompt and the functions that will ask users about manager, intern, and engineer.
  function buildTeam() {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }
}
runApp();