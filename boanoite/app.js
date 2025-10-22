let calculo = require('./calculo');

function app() {
let dividir = calculo.dividir
console.log(dividir(20,5));

let somar = calculo.somar
console.log(somar(20,5));

}

module.exports = app;

