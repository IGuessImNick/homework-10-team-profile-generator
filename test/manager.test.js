// Test file for Engineer constructor class
// <npm init -y> then <npm i -D jest> to install testing suite
// call from package.json with <npm test>

// requirements for test
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

// test methods
// testing includes: office number instantiated, declared methods functional

describe('test', () => {
    it("should set office number via constructor argument", () => {
        const testValue = 100;
        const e = new Manager("Bill", 1, "test@test.com", testValue, "Manager");
        expect(e.officeNumber).toBe(testValue);
    })
});

describe('test', () => {
    it("should return Manager with getRole()", () => {
        const testValue = "Manager";
        const e = new Manager("Bill", 1, "test@test.com", 100, "Manager");
        expect(e.getRole()).toBe(testValue);
    })
});

describe('test', () => {
    it("should get office number via getOffice()", () => {
        const testValue = 100;
        const e = new Manager("Bill", 1, "test@test.com", testValue, "Manager");
        expect(e.getOfficeNumber()).toBe(testValue);
    })
});