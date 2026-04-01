// exercicio 01 de Israel criar 04 vetores e imprimir cada um dos valores
let numb  = [ 10, 20, 30, 40];
console.log(numb[0]);
console.log(numb[1]);
console.log(numb[2]);
console.log(numb[3]);

//exercicio 02 comparar dois valores com 10

let numeros = [ 5, 10 ,15];
if (numeros[0] > 10) {
    console.log("a posição 0  é maior que 10");
} else {
    console.log("a posição 0  é menor que 10");
}
if (numeros [1] > 10) {
    console.log ("a posição 1 é maior que 10");
} else {

    console.log ("a posição 1 é menor que 10");
}

//exercicio de Izadora 01 . Dado o vetor com os nomes: ["São Paulo", "Rio de Janeiro", "Curitiba"] Exiba somente o último valor do vetor.

let cidades = [ "São ´paulo", "Rio de Janeiro", "Curitiba"];
console.log(cidades[2]); 

//Troque o valor de "Rio de Janeiro" por "Salvador" por índice,

cidades[1] = "Salvador"
console.log(cidades[1]);

//depois mostre todo o vetor.

console.log(cidades);

//exercicio 02 . Dado o vetor [15, 5, 8], verifique se o valor na posição 1 é maior do que 10, se sim, retornar "Verdadeiro", se não, retornar "Falso".

let numeros2 = [15,5,8]
if (numeros2[1] > 10) {
    console.log("verdadeiro");
} else {
    console.log("falso");
}

//exercicio 03. Dado o vetor [5, -3, 8], verifique se o valor na posição 1 é menor do que Zero. Se sim, substitua o elemento por zero. Mostre todo o vetor no final.

let numeros3 = [5, -3, 8];
if (numeros3[1] < 0) {
    numeros3[1] = 0;
    console.log(numeros3);
}

//exercicio 04. Gerenciamento de Lista: Compras
//Objetivo: Aprender a utilizar métodos dinâmicos para inserir (push) e remover (shift) elementos.
//Entrada: Um vetor vazio [] e comandos para adicionar "Arroz", "Feijão" e "Leite".
//Saída: O item removido ("Arroz") e a lista final contendo apenas os dois itens restantes.

let listinha_de_compras = [];
listinha_de_compras.push("arroz");
listinha_de_compras.push("feijão");
listinha_de_compras.push("leite");
  console.log(listinha_de_compras);

  let item_removido = listinha_de_compras.shift("arroz"); 
     console.log("item removido: " + item_removido);
        console.log("lista final: " + listinha_de_compras);

//exercicio 05. Filtragem: Verificação de Maioridade
//Objetivo: Aplicar lógica condicional ou métodos de alta ordem (filter) para extrair subconjuntos de dados.
//Entrada: Um vetor de idades: [12, 18, 25, 10, 30, 15].
//Saída: Um novo vetor contendo apenas os valores >= 18.

let idades = [12, 18, 25, 10, 30, 15];
let maiores_de_idade = idades.filter(function(idade) {
    return idade >= 18;});
     console.log(maiores_de_idade);

    

//exercicio 06. Histórico de Ações: Remoção do Último Registro
// Objetivo: Utilizar .pop() para remover a ação mais recente.
//Entrada: Um vetor com ações: ["Login", "Visualizar", "Logout"].
//Saída: Ação removida ("Logout") e vetor com as ações restantes.

let acoes = ["Login", "Visualizar", "Logout"];
let acao_removida = acoes.pop();
  console.log("ação removida: " + acao_removida);
    console.log("ações restantes: " + acoes); 

//exercicio 07.  Organização de Fila: Prioridade no Início
// Objetivo: Utilizar .unshift() para adicionar elementos no início do vetor.
//Entrada: Um vetor com nomes: ["Maria", "João"] e o comando para adicionar "Ana" no início.
//Saída: Vetor final com "Ana" na primeira posição.

let fila = ["Maria", "joão"];
    console.log(fila);
 fila.unshift("Ana");
   console.log(fila);

//exercicio 08.  Filtragem: Números Pares
//- Objetivo: Utilizar .filter() para selecionar apenas números pares.
//Entrada: Um vetor: [1, 2, 3, 4, 5, 6].
//Saída: Um novo vetor contendo apenas os números pares.
//Saída: Um novo vetor contendo apenas os números pares.

let numeros4 = [1, 2, 3, 4, 5, 6];
let numeros_pares = numeros4.filter(function(numero) {
    return numero % 2 === 0; });
        console.log(numeros_pares);

//exercicio 09. Filtragem: Valores Maiores que 10
// Objetivo: Utilizar .filter() para extrair valores maiores que 10.
//Entrada: Um vetor: [5, 12, 8, 20, 3].
//Saída: Um novo vetor contendo apenas os valores maiores que 10.

let numeros5 = [5, 12, 8, 20, 3];
let maiores_que_dez = numeros5.filter(function(numero) {
    return numero > 10; });
       console.log(maiores_que_dez);
       
//exercicio 10.  Filtragem: Nomes com Mais de 4 Letras
// Objetivo: Utilizar .filter() para selecionar strings com tamanho maior que 4.
//Entrada: Um vetor: ["Ana", "Bruno", "Carlos", "Eva"].
//Saída: Um vetor contendo apenas os nomes com mais de 4 letras.

let nomes = ["Ana", "Bruno", "Carlos", "Eva"];
let nomes_com_mais_de_quatro_letras = nomes.filter(function(nome) {
    return nome.length > 4; });
        console.log(nomes_com_mais_de_quatro_letras);
        