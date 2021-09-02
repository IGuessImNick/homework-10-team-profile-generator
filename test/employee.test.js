const { it } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe('test', () => {
    it("should create Employee objects", () => {
        const e = new Employee();
        expect(typeof (e)).toBe("object");
    })
});

describe('test', () => {
    it("should use constructors to set an employee name", () => {
        const name = "Robert";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    })
});

describe('test', () => {
    it("should use constructors to set an employee id", () => {
        const testValue = 100;
        const e = new Employee("Bill", testValue);
        expect(e.id).toBe(testValue);
    })
});

describe('test', () => {
    it("should use constructors to set an employee email", () => {
        const testValue = "test@test.com";
        const e = new Employee("Bill", 1, testValue);
        expect(e.email).toBe(testValue);
    })
});

describe('test', () => {
    it("should get name via getName()", () => {
        const testValue = "Robert";
        const e = new Employee(testValue);
        expect(e.getName()).toBe(testValue);
    })
});

describe('test', () => {
    it("should get id via getId()", () => {
        const testValue = 100;
        const e = new Employee("Bill", testValue);
        expect(e.getId()).toBe(testValue);
    })
});

describe('test', () => {
    it("should get email via getEmail()", () => {
        const testValue = "test@test.com";
        const e = new Employee("Bill", 1, testValue);
        expect(e.getEmail()).toBe(testValue);
    })
});

describe('test', () => {
    it("should get employee with getEmployee()", () => {
        const testValue = "Employee";
        const e = new Employee("Robert", 1, "test@test.com", "Employee");
        expect(e.getRole()).toBe(testValue);
    })
});

// test("Can instantiate Employee instance", () => {
//     const e = new Employee();
//     expect(typeof (e)).toBe("object");
// });

// test("Can set email via constructor argument", () => {
//     const testValue = "test@test.com";
//     const e = new Employee("Bill", 1, testValue);
//     expect(e.email).toBe(testValue);
// });

// test("Can get name via getName()", () => {
//     const testValue = "Robert";
//     const e = new Employee(testValue);
//     expect(e.getName()).toBe(testValue);
// });

// test("Can get id via getId()", () => {
//     const testValue = 100;
//     const e = new Employee("Bill", testValue);
//     expect(e.getId()).toBe(testValue);
// });

// test("Can get email via getEmail()", () => {
//     const testValue = "test@test.com";
//     const e = new Employee("Bill", 1, testValue);
//     expect(e.getEmail()).toBe(testValue);
// });

// test("getRole() should return \"Employee\"", () => {
//     const testValue = "Employee";
//     const e = new Employee("Robert", 1, "test@test.com", "Employee");
//     expect(e.getRole()).toBe(testValue);
// });