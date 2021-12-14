 /*
  Dado un string, pasar la primer letra a mayúscula.
  Hacerlo usando lodash.
 */

const _ = require("lodash"); 

function withFirstLetterUppered(word) {
    return _.capitalize(word);
}

module.exports = withFirstLetterUppered;