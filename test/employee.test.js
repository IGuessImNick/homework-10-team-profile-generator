// Test file for Employee constructor class
// <npm init -y> then <npm i -D jest> to install testing suite
// call from package.json with <npm test>

// requirements for test
const { it } = require("@jest/globals");
const Employee = require("../lib/Employee");

// test methods
// testing includes: correct object declaration, name/id/email/role instantiated, declared methods functional

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