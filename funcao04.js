const prompt = require('prompt-sync')()

function salarioBruto(horas, valor) {
    return horas * valor;
}

function salarioFinal(salario) {
    if (salario < 2000) {
        return salario + 200;
    } else {
        return salario;
    }
}

let nome = prompt("Nome:");
let horas = Number(prompt("Horas:"));
let valor = Number(prompt("Valor da hora:"));

let bruto = salarioBruto(horas, valor);
let final = salarioFinal(bruto);

console.log("Nome: " + nome);
console.log("Salário: " + final);