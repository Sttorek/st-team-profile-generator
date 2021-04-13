// generate the HTML Pages
const Manager = require(`../lib/Manager`);
const Engineer = require(`../lib/Engineer`);
const Intern = require(`../lib/Intern`)

const generateTeam = team => {


const  generateManager = Manager = {
     return `${manager.getName()} etc etc`
}
const  generateEngineer = Engineer = {
     return `${Engineer.getName()} etc etc`
}
const  generateIntern = Intern = {
     return `${Intern.getName()} etc etc`
}


const html = [];
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    return html.join("");
}





// Exporting a function
module.exports = team => {
  HTML TEMPLATE
      WHERE YOU WANT TO SHOW THE USER CONTENT
    <div>
      ${generateTeam(team)}
    </div>
}


