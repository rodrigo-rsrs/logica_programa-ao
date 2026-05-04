const prompt = require('prompt-sync')()

//

function ehPositivo(numero) {
    return numero > 0;
}

// 

let valor = Number(prompt("Digite um número:"));

if (valor === 0) {
    console.log("O número é zero");
} else if (ehPositivo(valor)) {
    console.log("O número é positivo");
} else {
    console.log("O número é negativo");
}