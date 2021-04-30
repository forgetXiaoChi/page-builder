const assert = require("assert");
const { randomDomainName } = require("../out/message");

describe("message", function () {
    it("randomDomainName", function () {
        let name = randomDomainName();
        console.log(name);
        assert.notStrictEqual(name, null);
    })
})