const hoursToMinutes = require("./ejercicio");
require("should");

describe("Test", () => {
    describe("hoursToMinutes", () => {
        it("una hora", () => hoursToMinutes(1).should.be.eql(60) );
        it("media hora", () => hoursToMinutes(0.5).should.be.eql(30) );
        it("un día", () => hoursToMinutes(24).should.be.eql(1440) );
    });
});