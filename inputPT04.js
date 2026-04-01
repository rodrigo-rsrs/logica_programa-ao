    //missão 03. sistema de notas
    //receber nome e nota de 3 alunos
    //exibir situação (>= 7 aprovado, < 7 reprovado)

    const prompt = require('prompt-sync')();



console.log("Situação dos alunos:");

for (let i = 0; i < 3; i++) {
    let nome = prompt("Digite o nome do aluno: ");
    let nota = Number(prompt("Digite a nota do aluno: "));

    if (nota >= 7) {
        console.log(nome + " - Aprovado");
    } else {
        console.log(nome + " - Reprovado");
    }
}