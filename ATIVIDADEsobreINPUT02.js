//missao 02. soma de valores
// pedir 5 numeros, armazenar em um vetor, mostrar a soma total no final

const prompt = require ('prompt-sync')();
 let caracteres = [];
 let soma = 0;
  
 for (let i = 0; i < 5; i++) { 
    let numero = prompt("Digite um número: ");
    caracteres.push(Number(numero));
    soma += Number(numero);
 }

    console.log("total dos numeros: " + soma);

   