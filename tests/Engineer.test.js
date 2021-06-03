
const Engineer = require('../lib/Engineer');

const engineerTest = new Engineer ('Aaron', 'Aaron.k.keller@gmail.com', 2, 'Engineer', 'ascendedkrishna')

describe("Engineer", () => {        //Test to confirm that the prototypes function as designed and includes all relevant information
    it('has a name', () => {

        expect(engineerTest.name).toEqual(expect.any(String))
        expect(engineerTest.name.length).toBeGreaterThan(2)

    })
    it('has an email address', () => {

        expect(engineerTest.email).toEqual(expect.stringContaining('@'))
    })

    it('has an ID that is a number', () => {

        expect(engineerTest.id).toEqual(expect.any(Number))
    })

    it('has a role of Engineer', () => {

        expect(engineerTest.role).toBe('Engineer')
    })

    it('has a Github username', () => {

        keys = Object.keys(engineerTest)
        optionKey = keys[4]
        expect(optionKey).toBe('github')
        expect(engineerTest.github).toEqual(expect.any(String))
    })


})


