const Manager = require("../team-members/Manager");

describe("Manager", () => {
    it("should contain a office number that is a number", () => {
        const office = 123;
        const newManager = new Manager("name", 1, "email", office);
        expect(newManager.office).toBe(office);
    })
})