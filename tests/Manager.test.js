
const Manager = require ('../lib/Manager');

const managerTest = new Manager ('Aaron', 'Aaron.k.keller@gmail.com', 4 , 'Manager', 109)

describe('Manager', () => {     //Test to confirm that the prototypes function as designed and includes all relevant information
    it('has a name', () => {

        expect(managerTest.name).toEqual(expect.any(String))
        expect(managerTest.name.length).toBeGreaterThan(2)

    })
    it('has an email id', () => {

        expect(managerTest.email).toEqual(expect.stringContaining('@'))
    })

    it('has an ID that is a num', () => {

        expect(managerTest.id).toEqual(expect.any(Number))
    })

    it('has a role of Manager', () => {

        expect(managerTest.role).toBe('Manager')
    })

    it('has a office number', () => {

        keys = Object.keys(managerTest)
        optionKey = keys[4]
        expect(optionKey).toBe('office')
        expect(managerTest.office).toEqual(expect.any(Number))
    })
})