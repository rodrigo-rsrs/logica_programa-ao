const prompt = require('prompt-sync')()


function soma(n) {
    let s = 0;
    for (let i = 0; i <= n; i++) {
        s = s + i;
    }
    return s;
}

function fatorial(n) {
    let f = 1;
    for (let i = 1; i <= n; i++) {
        f = f * i;
    }
    return f;
}

let opcao = -1;

while (opcao != 0) {
    console.log("1 - Soma");
    console.log("2 - Fatorial");
    console.log("0 - Sair");

    opcao = Number(prompt("Escolha:"));

    if (opcao == 1) {
        let n = Number(prompt("Número:"));
        let resultado = soma(n);
        console.log("Resultado: " + resultado);
    }

    if (opcao == 2) {
        let n = Number(prompt("Número:"));
        let resultado = fatorial(n);
        console.log("Resultado: " + resultado);
    }

    if (opcao == 0) {
        console.log("Saindo...");
    }
}