// view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database

// Packages needed for this application
const inquirer = require('inquirer');


// Imports the DoSQLTask module exported from actions.js (to perform sql operations)
const doSQLTask = require('./actions')
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
      '7. Update an employee role'
    ]
  },
];


// Initialize the app
function init() {
  // show the opening screen with company name
  console.log('------------------------------------');
  console.log('|          Company Name             |');
  console.log('------------------------------------');

  // runs the prompt to go through the questions and store the answers in a data object
  inquirer
    .prompt(questions)
    .then((data) => {
      // this takes the data and uses it to call the correct function
      console.log(data);
      doSQLTask(data);
    });
}

init();
