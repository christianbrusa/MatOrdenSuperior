const withFirstLetterUppered = require("./ejercicio");
require("should");

describe("Test", () => {
    describe("withFirstLetterUppered", () => {
        it("una sola palabra", () => withFirstLetterUppered("hola!").should.be.eql("Hola!") );
        it("varias palabras", () => withFirstLetterUppered("hola mundo!").should.be.eql("Hola mundo!") );
        it("con la primera letra en mayúscula", () => withFirstLetterUppered("Hola").should.be.eql("Hola") );
    });
});
