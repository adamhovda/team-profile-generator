const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./dist/HTML-generator');
const objToArr = require('./dist/HTML-generator');

let employeeInfo;
let role = "manager";
const employeeList = [];
let infoArr = []
let html;

const managerQuestions = [

    {
        type: 'input',
        name: 'name',
        message: 'What is the team managers name?'

    }
,
    {
        type: 'input',
        name: 'id',
        message: 'What is their ID?'
    }
,
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
,
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?'
    }
,    
    { 
        type: 'list',
        name: 'addRole',
        message: 'Is there any other team members you would like to add?',
        choices: ["Engineer", "Intern", "No one else to add"]
    }
    


];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the team members name?'

    }
,
    {
        type: 'input',
        name: 'id',
        message: 'What is their ID?'
    }
,
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
,
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    }

,    
    { 
        type: 'list',
        name: 'addRole',
        message: 'Is there any other team members you would like to add?',
        choices: ["Engineer", "Intern", "No one else to add"]
    }

]

const internQuestions = [

    {
        type: 'input',
        name: 'name',
        message: 'What is the team members name?'

    }
,
    {
        type: 'input',
        name: 'id',
        message: 'What is their ID?'
    }
,
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address??'
    }
,
    { 
        type: 'input',
        name: 'school',
        message: 'What is your school name?'

    }
,    
    { 
        type: 'list',
        name: 'addRole',
        message: 'Is there any other team members you would like to add?',
        choices: ["Engineer", "Intern", "No one else to add"]
    }

]




function init(questions){
    inquirer.prompt(questions)
    .then((data) => {
       switch (role) {
        case "manager":
            employeeInfo = new Manager(data.name, data.id, data.email, data.officeNumber)
            employeeList.push(employeeInfo);

        break;
        case "engineer":
            employeeInfo = new Engineer(data.name, data.id, data.email, data.github)
            employeeList.push(employeeInfo)
        break;
        case "intern":
            employeeInfo = new Intern(data.name, data.id, data.email, data.school)
            employeeList.push(employeeInfo)

        break;
       }
       

        
        
        
        //switch case to decide which questions to ask

        switch (data.addRole) {
            case "Engineer":
                role = 'engineer'
                // inquirer.prompt(engineerQuestions)
                init(engineerQuestions)
            break;
            case "Intern":
                role = 'intern'
                // inquirer.prompt(internQuestions)
                init(internQuestions)
            break;
            case "No one else to add":
                console.log("Your HTML page has been created")
                // let html = generateHtml(employeeList);
                let objString = JSON.stringify(employeeList)
                let newObjString1 = objString.replaceAll("{", "<div>")
                let newObjString2 = newObjString1.replaceAll("}", "</div>")
                let newObjString3 = newObjString2.replaceAll(",", "<br><br>")
                let newObjString4 = newObjString3.replaceAll("[", "")
                let newObjString5 = newObjString4.replaceAll("]", "")

                html = generateHtml(newObjString5);

                // let htmlString = generateHtml(html);
                writeToFile("team.html", html)

                console.log(employeeList)
                console.log(objString);

                // console.log(html)
            break;
        }

    //     fs.writeFile("test.json", JSON.stringify(data), (err) =>
    //     err ? console.log(err) : console.log('README created successfully!')
    //   );
    })
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('HTML created successfully!')
  );
}

init(managerQuestions);

