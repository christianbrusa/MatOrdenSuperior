const addOneAndThenApplyAnother = require("./ejercicio");
require("should");

describe("Test", () => {
    describe("addOneAndThenApplyAnother", () => {
    	const x2 = number => number * 2;

        it("con 1 y (*2) da 4", () => addOneAndThenApplyAnother(1, x2).should.be.eql(4) );
        it("con 2 y (*2) da 6", () => addOneAndThenApplyAnother(2, x2).should.be.eql(6) );
        it("con 3 y (/2), da 2", () => addOneAndThenApplyAnother(3, number => number / 2).should.be.eql(2) );
    });
});