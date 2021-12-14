 /*
  Dada una lista de números, sumarle 1 a cada uno.
  Hacerlo usando una biblioteca externa.
 */

const _ = require("lodash");

/*Busque en npmjs pero no encontré ninguna biblioteca que haga esto. 
De todas formas, como se comenta en la clase, en estos casos es mejor usar map o foreach ya que
en caso que la consigna pida sumarle 2 a cada uno precisariamos otra función*/
function addOneToAll(numbers) {
	let sumarUno = _.map(numbers, x => x +1);
	return sumarUno;
}

module.exports = addOneToAll;

