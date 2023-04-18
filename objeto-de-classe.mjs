import { UmaClasse } from "./classe.mjs";

let umaClasse = new UmaClasse("Primeiro Atributo");
let {capturaPrimeiroAtributo: umAtributo, outroAtributo} = umaClasse;

console.log("Um atributo: " + umAtributo);//Não tenho acesso
console.log("Outro atributo: " + outroAtributo);
