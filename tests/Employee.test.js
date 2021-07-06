const Employee = require("../team-members/Employee");

describe("Employee", () => {
    it("should contain a name that is a string", () => {
        const name = "Zion";
        const newEmployee = new Employee(name);
        expect(newEmployee.name).toBe("Zion");
    });

    it("should contain a id that is a number", () =>{
        const id = 1;
        const newEmployee = new Employee("name", id);
        expect(newEmployee.id).toBe(1);
    });

    it("should contain a email that is a string", () =>{
        const email = "sampleEmail@email.com"
        const newEmployee = new Employee("name", 1, email);
        expect(newEmployee.email).toBe("sampleEmail@email.com");
    });
})
