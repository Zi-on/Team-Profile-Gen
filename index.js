const Engineer = require("./team-members/Engineer");
const Manager = require("./team-members/Manager");
const Intern = require("./team-members/Intern");

const inquirer = require("inquirer");
const fs = require("fs");
const managers = [];
const engineers = [];
const interns = [];

const generateManagerCard = (manager) => {
  `
    <div class="card bg-light mb-4" style="max-width: 18rem;">
        <div class="card-header bg-danger">${manager.name}</div>
        <div class="card-header bg-danger">${manager.role}</div>
        <div class="card-body">
        <div class="list-group">
            <li class="list-group-item">${manager.id}</li>
            <li class="list-group-item">${manager.email}</li>
            <li class="list-group-item">${manager.office}</li>
        </div>
        </div>
    </div>
    `;
};

const addTeamMember = () => {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "addTeamMember",
        message: "Would you like to add another team member?",
      },
    ])
    .then((answers) => {
      if (answers.addTeamMember === true) {
        firstQuestion();
      } else {
          console.log(managers, engineers, interns);
          module.exports = managers;
          module.exports = engineers;
          module.exports = interns;
          secondQuestion();
        return answers;
      }
    });
};

const engineerQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your github username?",
      },
    ])
    .then((answers) => {
      const newEngineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      engineers.push(newEngineer);
      addTeamMember();
    })
};

const managerQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "office",
        message: "What is your office number?",
      },
    ])
    .then((answers) => {
      const newManager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.office
      );
      managers.push(newManager);
      addTeamMember();
    });
};

const internQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "school",
        message: "What school do you attend?",
      },
    ])
    .then((answers) => {
      const newIntern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      interns.push(newIntern);
      addTeamMember();
    });
};

const firstQuestion = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is your role?",
        choices: ["Manager", "Intern", "Engineer"],
      },
    ])
    .then((answers) => {
      if (answers.role === "Manager") {
        managerQuestions();
      } else if (answers.role === "Engineer") {
        engineerQuestions();
      } else if (answers.role === "Intern") {
        internQuestions();
      }
    });
};

firstQuestion();

const secondQuestion = () => {
managers.forEach((manager => {
    fs.writeFileSync("index.html", generateManagerCard(manager))
}))}