const Employee = require ('../lib/Employee');

const employeeTest = new Employee ('Aaron', 'Aaron.k.keller@gmail.com', 3 , "Employee");


describe('Employee', () => {        //Test to confirm that the prototypes function as designed and includes all relevant information
    it('has a name', () => {

        expect(employeeTest.name).toEqual(expect.any(String))
        expect(employeeTest.name.length).toBeGreaterThan(2)
    })

    it('has an email address', () => {

        expect(employeeTest.email).toEqual(expect.stringContaining('@'))
    })

    it('has an ID that is a number', () => {

        expect(employeeTest.id).toEqual(expect.any(Number))
    })

    it('has a role of Employee', () => {

        expect(employeeTest.role).toBe('Employee')
    })

})