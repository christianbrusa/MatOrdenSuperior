 /*
  Dada una cantidad de horas, convertirla a minutos.
  Hacerlo usando una biblioteca externa.
 */
const moment = require('moment');

function hoursToMinutes(hours) {
	//https://www.tutorialspoint.com/momentjs/momentjs_durations.htm
	let hora = moment.duration(hours, 'hours');
	return moment.duration(hora).asMinutes();
}

module.exports = hoursToMinutes;
