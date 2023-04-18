let uvas = ['Pinot Grigio', 'Riesling', 'Tempranillo'];
var [primeiroNome, segundoNome, terceiroNome] = uvas;

console.log("Primeiro nome: " + primeiroNome);
console.log("Segundo nome: " + segundoNome);
console.log(primeiroNome, ",", segundoNome);
console.log();

var [primeiroNome, ...demais] = uvas;
console.log("Demais: \"" + demais.toString().replace(',', ' - ') + '"');

var [soOPrimeiro, , soOUltimo] = uvas;
console.log(soOPrimeiro);

console.log(soOUltimo);