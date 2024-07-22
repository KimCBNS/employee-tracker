
// Packages needed for this application
const inquirer = require('inquirer');

// Imports the DoSQLTask module exported from actions.js (to perform sql operations)

const doSQLTask = require('./actions');
// Creates an array of questions for user input - each question has an identifier eg: title

const questions = [
  { // uses a list to give the user a choice
    type: 'list',
    name: 'ToDo',
    message: 'What would you like to do:',
    choices: [
      '1. View all departments', 
      '2. View all roles',
      '3. View all employees', 
      '4. Add a department', 
      '5. Add a role', 
      '6. Add an employee', 
      '7. Update an employee role',
      '8. Exit'
    ]
  },
];


// Initialize the app
function init() {
  // show the opening screen with company name
  console.log('------------------------------------');
  console.log('|                                   |');
  console.log('|                                   |');
  console.log('|          Employee Tracker         |');
  console.log('|                                   |');
  console.log('|                                   |');
  console.log('------------------------------------');

  mainMenu();

}
  // runs the prompt to go through the questions and store the answers in a data object
// needed to change this to rerun mainmenu
//   function mainMenu() {
//   inquirer
//     .prompt(questions)
//     .then((data) => {
//       // this takes the data and uses it to call the correct function
//       doSQLTask(data);  
//     });
// }

async function mainMenu() {
  try {
    const answers = await inquirer.prompt(questions)
  

    await doSQLTask(answers);
    if (answers.ToDo !== 'Exit') {
      mainMenu(); // Return to the main menu after the task is completed
    } else {
      console.log('Exiting application.');
      process.exit(); // Exit the application
    }
  } catch (error) {
    console.error('Error during main menu prompt:', error);
  }
}




init();
