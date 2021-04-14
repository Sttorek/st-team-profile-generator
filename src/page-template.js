// generate the HTML Pages
const Manager = require(`../lib/Manager`);
const Engineer = require(`../lib/Engineer`);
const Intern = require(`../lib/Intern`)

const generateTeam = team => {

  // in here we choose which position function we use and assign the variable HTML to the fuction created and  insert into the 
  if() 



}
const  generateManager = Manager => {
     return `${manager.getName()} `
     
}
const  generateEngineer = Engineer => {
     return `${Engineer.getName()} etc etc`
}
const  generateIntern = Intern => {
     return `${Intern.getName()} etc etc`
}


const html = [];

// this block goes inside of each function!!!!
  html.push(team 
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    return html.join("");
}





// Exporting a function
module.exports = team => {
  HTML TEMPLATE
      
  `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
      <link rel="stylesheet" href="./dist/style.css">  
      <!-- !!!!!!!!!!!!! change path once page is built !!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
      <title>My Team</title>
  </head>
  <body>
      <nav>
          <h1>My Team</h1>
      </nav>
      
      ${generateTeam(team)}
 
    </body>
  </html>`
   
}


