const Employee = require("./team-members/Employee");

describe("Employee", () => {
    it("should contain a name", () => {
        const name = "Zion";
        const newEmployee = new Employee(name);
        expect(newEmployee.name).toBe("Zion");
    })
})