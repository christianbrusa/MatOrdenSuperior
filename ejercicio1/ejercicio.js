 /*
1. Instalar la famosa biblioteca lodash
2. Usar lodash para que dado un string, reemplazar los caracteres con tildes por el mismo sin tilde. Contemplar 'à', 'á'.
Podés chequear la documentación y las funciones que provee acá: https://lodash.com/docs/4.17.15
 */

const _ = require("lodash");

function withoutAccents(word) {
    return _.deburr(word);
}

module.exports = withoutAccents;