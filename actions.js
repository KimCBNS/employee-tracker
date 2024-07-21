// choices: [
//   '1. View all departments', 
//   '2. View all roles',
//   '3. View all employees', 
//   '4. Add a department', 
//   '5. Add a role', 
//   '6. Add an employee', 
//   '7. Update an employee role'


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function doSQLTask(data) {

  switch (data.ToDo) {
    case '1. View all departments':
      console.log("1");
      break;
    case '2. View all roles':
      console.log("2");
      break;
    case '3. View all employees':
      console.log("3");
      break;
    case '4. Add a department':
      console.log("4");
      break;
    case '5. Add a role':
      console.log("5");
      break;

    case '6. Add an employee':
      console.log("6");
      break;

    case '7. Update an employee role':
      console.log("7");
      break;

    default:
      console.log("something happened to the choice");
  }

  // data coming in
  console.log(`data is here ${data.ToDo} now `);

};


module.exports = doSQLTask;