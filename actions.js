// choices: [
//   '1. View all departments', 
//   '2. View all roles',
//   '3. View all employees', 
//   '4. Add a department', 
//   '5. Add a role', 
//   '6. Add an employee', 
//   '7. Update an employee role'





// use this later to end the session
// function closeConnection() {
//   if (client) {
//     client.end();
//   }
// }

/////////


// set up the SQL connections
const { Pool } = require('pg');

const pool = new Pool(
  {
    // TODO: Enter PostgreSQL username
    user: 'postgres',
    // TODO: Enter PostgreSQL password
    password: 'password',
    host: 'localhost',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
)

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Connected to the company_db database.');
  release();
});

async function viewDepartments() {
  try {
    const res = await pool.query('SELECT id, department_name AS department FROM department');
    return res.rows;
  } catch (err) {
    console.error('Error viewing departments:', err.message);
    throw err;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
async function doSQLTask(data) {
  // set up the SQL connections
  switch (data.ToDo) {
    case '1. View all departments':
      console.log("1");
      // need to do a SQL query to get all the data
      // Await the result of the viewDepartments function
      try {
        const departmentReturn = await viewDepartments();
        console.table(departmentReturn);
      } catch (err) {
        console.error('Error retrieving departments:', err.message);
      }
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