const Employee = require ('./Employee');

class Manager extends Employee {        //Manager prototype extending on the Employee constructor

    constructor (name, email, id, role, office) {

        super(name, email, id, role)
        this.office = office;
    }

    getOfficeNumber() {

        return this.office;
    }
}

module.exports = Manager; 
