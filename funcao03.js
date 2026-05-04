const prompt = require('prompt-sync')()

function Primo(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}

function mostrar(num) {
    if (Primo(num)) {
        console.log("É primo");
    } else {
        console.log("Não é primo");
    }
}

let numero = Number(prompt("Digite um número:"));
mostrar(numero);