// Test file for Engineer constructor class
// <npm init -y> then <npm i -D jest> to install testing suite
// call from package.json with <npm test>

// requirements for test
const Intern = require("../lib/Intern");

// test methods
// testing includes: school instantiated, declared methods functional

describe('test', () => {
    it("should use a Constructor to set school", () => {
        const testValue = "UC Davis";
        const e = new Intern("Bill", 1, "test@test.com", testValue, "Intern");
        expect(e.school).toBe(testValue);
    })
});

describe('test', () => {
    it("should return Intern via getInter()", () => {
        const testValue = "Intern";
        const e = new Intern("Bill", 1, "test@test.com", "UCLA", "Intern");
        expect(e.getRole()).toBe(testValue);
    })
});

describe('test', () => {
    it("should get school via getSchool()", () => {
        const testValue = "UoC Davis";
        const e = new Intern("Bill", 1, "test@test.com", testValue, "Intern");
        expect(e.getSchool()).toBe(testValue);
    })
});