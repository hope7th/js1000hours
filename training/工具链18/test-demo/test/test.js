var assert = require("assert");
var add = require("../add.js").add;
var mul = require("../add.js").mul;
// import { add,mul } from "../add.js"
//describe是分组的机制
describe('add function testing', () => {
    it('1+2 should be 3', () => {
        assert.equal(add(1, 2), 3)
    });
    it('-4+2 should be -3', () => {
        assert.equal(add(-4, 2), -2)
    });
    it('-5+2 should be -10', () => {
        assert.equal(mul(-5, 2), -10)
    });
});