



// set up for Inquirer to allow user to enter data for dept, employee and roles added
const inquirer = require('inquirer');
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




// functions that will implement SQL requests to read, add to or delete from database

async function viewDepartments() {
  try {
    const res = await pool.query('SELECT id, department_name AS department FROM department');
    return res.rows;
  } catch (err) {
    console.error('Error viewing departments:', err.message);
    throw err;
  }
}

async function viewRoles() {
  try {
    const res = await pool.query('SELECT id, title, salary, department_id FROM role');
    return res.rows;
  } catch (err) {
    console.error('Error viewing roles:', err.message);
    throw err;
  }
}

// table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to




async function viewEmployees() {
  try {
    const res = await pool.query('SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department_name, role.salary, manager.first_name AS managerFirst, manager.last_name AS managerLast FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id LEFT JOIN employee AS manager ON employee.manager_id = manager.id;');
    return res.rows;
  } catch (err) {
    console.error('Error viewing employees:', err.message);
    throw err;
  }
}


async function addDepartment() {
  const departmentInfo = await inquirer.prompt([
    {
      type: 'input',
      name: 'department_name',
      message: 'Enter the name of the new department:'
    }
  ]);

  const { department_name } = departmentInfo;
  try {
    await pool.query('INSERT INTO department (department_name) VALUES ($1)', [department_name]);
    console.log(`Added department: ${department_name}`);
  } catch (err) {
    console.error('Error adding department:', err.message);
    throw err;
  }
}

async function addRole () {
  const roleInfo = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of the role:'

    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter the salary of the role:'
    },
    {
      type: 'input',
      name: 'department_id',
      message: 'Enter the department ID for the role:'
    }
  ]);

  const { title, salary, department_id } = roleInfo;
  try {
    await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, department_id]);
    console.log(`Added role: ${title}`);
  } catch (err) {
    console.error('Error adding role:', err.message);
    throw err;
  }
}




async function addEmployee() {
  const employeeInfo = await inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'Enter the first name of the employee:'
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'Enter the last name of the employee:'
    },
    {
      type: 'input',
      name: 'role_id',
      message: 'Enter the role ID for the employee:'
    },
    {
      type: 'input',
      name: 'manager_id',
      message: 'Enter the manager ID for the employee (if any):'
    }
  ]);

  const { first_name, last_name, role_id, manager_id } = employeeInfo;
  try {
    await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [first_name, last_name, role_id, manager_id || null]);
    console.log(`Added employee: ${first_name} ${last_name}`);
  } catch (err) {
    console.error('Error adding employee:', err.message);
    throw err;
  }

}


// `UPDATE reviews SET review = $1 WHERE id = $2`;
async function updateEmployee() {
  const employeeInfo = await inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'Enter the first name of the employee you wish to update:'
    },
    {
      type: 'input',
      name: 'role_id',
      message: 'Enter the new role ID for the employee:'
    },
  ]);

  const { first_name, role_id } = employeeInfo;
 
  try {
    await pool.query(`UPDATE employee SET role_id = $1 WHERE first_name = $2`, [role_id, first_name || null]);
    console.log(`Updated employee role: ${first_name}`);
  } catch (err) {
    console.error('Error updating employee:', err.message);
    throw err;
  }

}


// function that handles the menu prompt choices of the user
// the function uses a switch statement that then calls async functions.
async function doSQLTask(data) {
  // set up the SQL connections
  switch (data.ToDo) {
    case '1. View all departments':
      // need to do a SQL query to get all the data
      // Await the result of the viewDepartments function
      try {
        const departmentReturn = await viewDepartments();
        const departmentPrint = departmentReturn.map(({ id, department }) => ({ ID: id, Department: department }));
        console.table(departmentPrint);
      } catch (err) {
        console.error('Error retrieving departments:', err.message);
      }
      break;

    case '2. View all roles':
      try {
        const roleReturn = await viewRoles();

        console.table(roleReturn);
      } catch (err) {
        console.error('Error retrieving roles:', err.message);
      }
      break;

    case '3. View all employees':
      try {
        const employeeReturn = await viewEmployees();

        console.table(employeeReturn);
      } catch (err) {
        console.error('Error retrieving employees:', err.message);
      }
      break;

    case '4. Add a department':
      try {
        const addDept = await addDepartment();
      } catch (err) {
        console.error('Error adding department:', err.message);
      }
      break;

    case '5. Add a role':
      try {
        const addRoles = await addRole();
      } catch (err) {
        console.error('Error test adding role:', err.message);
      }
      break;
    
    case '6. Add an employee':
      try {
        const addingEmployee = await addEmployee()
            } catch (err) {
        console.error('Error adding employee:', err.message);
      }
      break;

    case '7. Update an employee role':
      try {
        const updateEmployeeRole = await updateEmployee()
            } catch (err) {
        console.error('Error when updating employee:', err.message);
      }
      break;

    case '8. Exit':
    process.exit(0);
    break;

    default:
      console.log("There was an error in the choice");
  }


};



module.exports = doSQLTask;