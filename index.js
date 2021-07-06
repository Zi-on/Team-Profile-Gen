const Engineer = require("../team-members/Engineer");
const Manager = require("../team-members/Manager");
const Intern = require("../team-members/Intern");

const inquirer = require("inquirer");
const fs = require("fs");

const managers = [];
const engineers = [];
const interns = [];

const generateTopHtml = () => {
    return`<!doctype html>
<html lang="en">
  <head>
    <title>Team Profile Generator</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4 text-center">My Team</h1>
        </div>
    </div>
    <div class="row">`
}

const generateManagerCard = (manager) => {
  return`
    <div class="card bg-light mb-4" style="max-width: 18rem;">
        <div class="card-header bg-danger">${manager.name}</div>
        <div class="card-header bg-danger">Manager <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-coffee" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1" />
        <path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
        <path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
        <path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z" />
        <path d="M16.746 16.726a3 3 0 1 0 .252 -5.555" />
      </svg></div>
        <div class="card-body">
        <div class="list-group">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office: ${manager.office}</li>
        </div>
        </div>
    </div>
    `;
};

const generateEngineerCard = (engineer) => {
    return`
    <div class="card bg-light mb-4" style="max-width: 18rem;">
    <div class="card-header bg-danger">${engineer.name}</div>
    <div class="card-header bg-danger">Engineer <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eyeglass-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M8 4h-2l-3 10v2.5" />
    <path d="M16 4h2l3 10v2.5" />
    <line x1="10" y1="16" x2="14" y2="16" />
    <circle cx="17.5" cy="16.5" r="3.5" />
    <circle cx="6.5" cy="16.5" r="3.5" />
  </svg></div>
    <div class="card-body">
    <div class="list-group">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a> </li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
    </div>
    </div>
</div>
    `
};

const generateInternCard = (intern) => {
    return`
    <div class="card bg-light mb-4" style="max-width: 18rem;">
    <div class="card-header bg-danger">${intern.name}</div>
    <div class="card-header bg-danger">Intern <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-school" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
    <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
  </svg></div>
    <div class="card-body">
    <div class="list-group">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
        <li class="list-group-item">School: ${intern.school}</li>
    </div>
    </div>
</div>
    `
};

const generateBottomHtml = () => {
   return`</div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>`
}

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
          deleteHtml();
          topHtmlFile();
          managerGenerator();
          engineerGenerator();
          internGenerator();
          bottomHtmlFile();
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

const deleteHtml = () => {
  fs.unlinkSync("./index.html");
};
const topHtmlFile = () => {
    fs.appendFileSync("index.html", generateTopHtml());
};
const managerGenerator = () => {
managers.forEach((manager => {
    fs.appendFileSync("index.html", generateManagerCard(manager))
}))};
const engineerGenerator = () => {
engineers.forEach((engineer => {
    fs.appendFileSync("index.html", generateEngineerCard(engineer))
}))};
const internGenerator = () => {
interns.forEach((intern => {
    fs.appendFileSync("index.html", generateInternCard(intern))
}))};
const bottomHtmlFile = () => {
    fs.appendFileSync("index.html", generateBottomHtml());
};
