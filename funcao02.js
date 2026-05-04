const prompt = require('prompt-sync')()


function alturaPredio(sPredio, aPessoa, sPessoa) {
    let altura = (sPredio * aPessoa) / sPessoa;
    return altura;
}

let sPredio = Number(prompt("Sombra do prédio:"));
let aPessoa = Number(prompt("Sua altura:"));
let sPessoa = Number(prompt("Sua sombra:"));

let resultado = alturaPredio(sPredio, aPessoa, sPessoa);

console.log("Altura do prédio: " + resultado);