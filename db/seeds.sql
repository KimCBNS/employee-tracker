 -- Seed data for department table
INSERT INTO department (department_name) VALUES
('Sales'),
('Engineering'),
('Human Resources'),
('Marketing'),
('Finance');

-- Seed data for role table
INSERT INTO role (title, salary, department_id) VALUES
('Sales Manager', 75000.00, 1),
('Software Engineer', 95000.00, 2),
('HR Specialist', 60000.00, 3),
('Marketing Coordinator', 55000.00, 4),
('Financial Analyst', 70000.00, 5),
('Sales Associate', 45000.00, 1),
('DevOps Engineer', 90000.00, 2),
('Recruiter', 50000.00, 3),
('SEO Specialist', 60000.00, 4),
('Accountant', 65000.00, 5);

-- Seed data for employee table
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES
('Jackson', 'Dove', NULL, 1),
('Jane', 'Smith', 1, 2),
('Alice', 'Johnson', 1, 3),
('Bob', 'Brown', NULL, 4),
('Charlie', 'Davis', 4, 5),
('David', 'Evans', 1, 6),
('Brianna', 'Garcia', 2, 7),
('Frank', 'Harris', 3, 8),
('Grace', 'Ivy', 4, 9),
('Hank', 'Jones', 5, 10);
