// listagem
// crie um vetor de 5 posições e imprima cada posição utilizando o for

let Number = [10, 20, 30, 40, 50];

for (let i = 0; i < Number.length; i++) {
    console.log(Number[i]);
}

// acumulador
// calcule a soma de todos os valores

let adicao = 0;

for (let i = 0; i < Number.length; i++) {
    adicao += Number[i];
}

console.log(adicao);