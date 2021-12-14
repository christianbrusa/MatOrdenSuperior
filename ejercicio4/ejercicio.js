 /*
  Dada un numero y una función, aplicar la función con el número incrementado en 1.
 */

function addOneAndThenApplyAnother(number, anotherFunction) {
	return anotherFunction(number + 1);
}

module.exports = addOneAndThenApplyAnother;