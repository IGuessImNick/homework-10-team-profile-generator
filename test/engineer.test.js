const Engineer = require("../lib/Engineer");

describe('test', () => {
    it("should use a Constructor to set GitHub username", () => {
        const testValue = "GitHubUser";
        const e = new Engineer("Bill", 1, "test@test.com", testValue, "Engineer");
        expect(e.github).toBe(testValue);
    })
});

describe('test', () => {
    it("should return Engineer with getEngineer()", () => {
        const testValue = "Engineer";
        const e = new Engineer("Bill", 1, "test@test.com", "GitHubUser", "Engineer");
        expect(e.getRole()).toBe(testValue);
    })
});

describe('test', () => {
    it("should get GitHub username via getGithub()", () => {
        const testValue = "GitHubUser";
        const e = new Engineer("Bill", 1, "test@test.com", testValue, "Engineer");
        expect(e.getGithub()).toBe(testValue);
    })
});