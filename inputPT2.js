//  Missão 01.
//Cadastro de nomes
//Pedir 5 nomes, armazenar em um vetor, exibir todos no final


 //codigo corrigido
 const prompt = require('prompt-sync')();

let nomes = [];

for (let i = 0; i < 5; i++) {
    let nome = prompt("Digite um nome: ");
    nomes.push(nome);
}

console.log('Nomes cadastrados:');
console.log(nomes);

