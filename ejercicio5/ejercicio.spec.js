const addOneToAll = require("./ejercicio");
require("should");

describe("Test", () => {
    describe("addOneToAll", () => {
        it("dada una lista, incrementa cada número en 1", () => addOneToAll([ 1,2,3 ]).should.be.eql([ 2,3,4 ]) );
        it("dada una lista vacía, devuelve una lista vacía", () => addOneToAll([]).should.be.eql([]) );
    });
});