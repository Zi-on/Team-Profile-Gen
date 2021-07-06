const Engineer = require("../team-members/Engineer");

describe("Engineer", () => {
    it("should contain a github that is a string", () => {
        const github = "zi-on";
        const newEngineer = new Engineer("name", 1, "email", github);
        expect(newEngineer.github).toBe(github);
    })
})