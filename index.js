const Employee = require('./team-members/Employee');
const Engineer = require('./team-members/Engineer');
const Manager = require('./team-members/Manager');
const Intern = require('./team-members/Intern');

const inquirer = require('inquirer');
const fs = require('fs');

const addTeamMember = () => {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'addTeamMember',
            message: 'Would you like to add another team member?'
        }
    ]).then((answers) => {
        if (answers.addTeamMember === true) {
            firstQuestion();
        }
        else {
            return answers;
        }
    })
}

const employeeQuestion = () => {
    inquirer.prompt([
        {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is your ID?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
  },
    ])
}

const firstQuestion = () => {
    inquirer.prompt([
      {
        type: 'list',
        name: 'role',
        message: 'What is your role?',
        choices: ['Employee', 'Manager', 'Intern', 'Engineer']
      },
    ]).then((answers) => {
        if (answers.role === 'Employee') {
            employeeQuestion();
            addTeamMember();
        }
        else if (answers.role === 'Manager') {
            managerQuestions();
            console.log('you chose manager')
        }
  
      
  })
}

firstQuestion();