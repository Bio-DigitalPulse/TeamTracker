const Employee = require('./Employee');

class Engineer extends Employee {       //Engineer prototype extending on the Employee constructor

    constructor (name, email, id, role, github) {
        
        super(name, email, id, role)
        this.github = github;
    }

    getGithub() {

        return this.github;
    }
}

module.exports = Engineer;
