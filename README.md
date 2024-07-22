Employee Tracker

Description
This command-line application allows business owners to manage their company's employee database using Node.js, Inquirer, and PostgreSQL. The application provides functionality to view and manage departments, roles, and employees to help organize and plan business operations efficiently.

Installation
Clone the repository: git clone https://github.com/KimCBNS/employee-tracker
Navigate to the project directory: cd employee-tracker
Install the required npm packages: npm install
Install Inquirer version 8.2.4.: npm install inquirer@8.2.4  (version is important)
Set up your PostgreSQL database and update the connection settings in the application.


Usage
Start the application: node index.js
Follow the prompts to view and manage departments, roles, and employees.


Database Schema
The database schema includes three tables: department, role, and employee.

department:

id: SERIAL PRIMARY KEY
name: VARCHAR(30) UNIQUE NOT NULL
role:

id: SERIAL PRIMARY KEY
title: VARCHAR(30) UNIQUE NOT NULL
salary: DECIMAL NOT NULL
department_id: INTEGER NOT NULL REFERENCES department(id)


employee:
id: SERIAL PRIMARY KEY
first_name: VARCHAR(30) NOT NULL
last_name: VARCHAR(30) NOT NULL
role_id: INTEGER NOT NULL REFERENCES role(id)
manager_id: INTEGER REFERENCES employee(id)


User Story

AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database


Video Walkthrough
To demonstrate the functionality of the application, a walkthrough video has been created. You can view it here: https://drive.google.com/file/d/1fzWj4cBizafZnQZqnwwL5Coi-kx7frGs/view


License
This project is licensed under the MIT License.

Contact me for comments or suggestions: Kim Desveaux https://github.com/KimCBNS/ s