const inquirer = require('inquirer');       //Declared variables 
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const pageTemplate = require('./src/page-template'); 
const generatePage = require('./generate-html');
const teamMembers = []

 

function userData() {       //User data function to populate the application

    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter Employee Name: ',
            name: 'name',
            validate: answer => {

                if (answer !== "") {

                  return true;

                } else {
                    
                    return 'Please enter Employee Name.';
                }
            }
        },

        {
            type: 'input',
            message: 'Enter Email: ',
            name: 'email',
            validate: answer => {

                const pass = answer.match(
                  /\S+@\S+\.\S+/        //Email address must include (name)@(name).com
                );

                if (pass) {

                  return true;

                } else {

                    return 'Please enter Employee E-mail address.';
                }
            }
        },

        {
            type: 'input',
            message: 'Enter Employee Id: ',
            name: 'id',
            validate: answer => {

                const pass = answer.match(
                  /^[1-9]\d*$/      //ID must be numbers between 1 and 9
                );

                if (pass) {

                  return true;

                } else {

                    return 'Please enter Employee Identification Number.';
                }
            }
        },

        {
            type: 'list',
            message: 'Select Role: ',
            name: 'role',
            choices: ["Manager", "Engineer", "Intern"]

        },

    ])

    .then(answers => {

            if (answers.role === 'Manager') {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'office',
                        message:'Enter Office Number:',
                        validate: answer => {

                            const pass = answer.match(
                              /^[1-9]\d*$/
                            );

                            if (pass) {

                              return true;

                            } else {

                                return 'Please enter Office number: ';
                            }
                        }
                        
                    }
                ])

                .then(response => {

                    const ManagerTeam = new Manager (answers.name, answers.email, answers.id, answers.role, response.office)
                    teamMembers.push(ManagerTeam);
                    addOption()
                })

            }else if(answers.role === 'Engineer' ){

                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'github',
                        message:'Enter Github name:',
                        validate: answer => {

                            if (answer !== "") {

                              return true;

                            } else {

                                return 'Please enter Github username.';
                            }
                        }
                    }
                ])

                .then(response => {

                    const EngineerTeam = new Engineer (answers.name, answers.email, answers.id, answers.role, response.github)
                    teamMembers.push(EngineerTeam);
                    addOption()
                })

            } else if (answers.role === 'Intern'){

                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'school',
                        message:'Enter School name:', 
                        validate: answer => {

                            if (answer !== "") {

                              return true;

                            } else {

                                return 'Please enter school name.';
                            }
                        }

                    }
                ])

                .then(response => {

                    const internTeam = new Intern (answers.name, answers.email, answers.id, answers.role, response.school)
                    teamMembers.push(internTeam);
                    addOption()
                })
            }

            else {

                const employeeTeam = new Employee (answers.name, answers.email, answers.id, answers.role);
                teamMembers.push(employeeTeam);
                addOption()

            }

            function addOption() {

                inquirer.prompt([
                    {
                        type:'confirm',
                        name: 'addMore',
                        message:'Would you like to add another Employee?'
                    }
                ])

                .then(res => {

                    if(res.addMore === true){

                        userData(teamMembers);

                    } else {
                        
                        let employeeCards = pageTemplate(teamMembers);
                        generatePage(employeeCards)
                    }
                })
            }
        })
}


userData();


