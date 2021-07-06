const Intern = require("../team-members/Intern");

describe("Intern", () => {
    it("should contain a school that is a string", () => {
        const school = "UTSA";
        const newIntern = new Intern("name", 1, "email", school);
        expect(newIntern.school).toBe(school);
    })
})