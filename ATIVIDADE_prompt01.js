const prompt = require("prompt-sync")();

// ============================
// QUESTÃO 01
// ============================
// Ler a idade de 7 pessoas e contar quantas são maiores de idade

let maioresDeIdade = 0;

for (let i = 0; i < 7; i++) {
    let idade = parseInt(prompt("Digite a idade da pessoa " + (i + 1) + ": "));

    if (idade >= 18) {
        maioresDeIdade++;
    }
}

console.log("Quantidade de pessoas maiores de idade: " + maioresDeIdade);


// ============================
// QUESTÃO 02
// ============================
// Ler 10 valores e somar apenas os positivos

let somaPositivos = 0;

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Digite um número inteiro " + (i + 1) + ": "));

    if (numero > 0) {
        somaPositivos += numero;
    }
}

console.log("A soma dos números positivos é: " + somaPositivos);


// ============================
// QUESTÃO 03
// ============================
// Contar números em intervalos até digitar um número negativo

let inter1 = 0;
let inter2 = 0;
let inter3 = 0;
let inter4 = 0;

while (true) {
    let num = parseInt(prompt("Digite um número inteiro (negativo para encerrar): "));

    if (num < 0) {
        break;
    } else if (num <= 25) {
        inter1++;
    } else if (num <= 50) {
        inter2++;
    } else if (num <= 75) {
        inter3++;
    } else if (num <= 100) {
        inter4++;
    }
}

console.log("Quantidade no intervalo [0-25]: " + inter1);
console.log("Quantidade no intervalo [26-50]: " + inter2);
console.log("Quantidade no intervalo [51-75]: " + inter3);
console.log("Quantidade no intervalo [76-100]: " + inter4);


// ============================
// QUESTÃO 04 (FOR)
// ============================
// Múltiplos de 6 entre 11 e 210 + média

let somaMultiplos = 0;
let quantidadeMultiplos = 0;

for (let i = 11; i <= 210; i++) {
    if (i % 6 === 0) {
        console.log(i);
        somaMultiplos += i;
        quantidadeMultiplos++;
    }
}

let media = somaMultiplos / quantidadeMultiplos;
console.log("Média dos múltiplos (FOR): " + media);


// ============================
// QUESTÃO 04 (WHILE)
// ============================

let j = 11;
somaMultiplos = 0;
quantidadeMultiplos = 0;

while (j <= 210) {
    if (j % 6 === 0) {
        console.log(j);
        somaMultiplos += j;
        quantidadeMultiplos++;
    }
    j++;
}

media = somaMultiplos / quantidadeMultiplos;
console.log("Média dos múltiplos (WHILE): " + media);

// ============================
// QUESTÃO 05
// ============================
// Maior e menor idade de 10 pessoas

let maior = 0;
let menor = Infinity;

for (let i = 1; i <= 10; i++) {
    let idade = parseInt(prompt("Digite a idade da pessoa " + i + ": "));

    if (idade > maior) {
        maior = idade;
    }

    if (idade < menor) {
        menor = idade;
    }
}

console.log("Maior idade: " + maior);
console.log("Menor idade: " + menor);