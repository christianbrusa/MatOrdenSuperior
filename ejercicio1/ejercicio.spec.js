const withoutAccents = require("./ejercicio");
require("should");

describe("Test", () => {
    describe("withoutAccents", () => {
        it("con un tilde", () => withoutAccents("débito").should.be.eql("debito") );
        it("con un tilde invertido", () => withoutAccents("dèbito").should.be.eql("debito") );
        it("sin tilde", () => withoutAccents("debito").should.be.eql("debito") );
        it("con varios tildes", () => withoutAccents("cómo estás").should.be.eql("como estas") );
    });
});