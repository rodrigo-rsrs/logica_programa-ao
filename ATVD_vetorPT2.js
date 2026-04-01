//exercicio 01. analise de vendasa
//calcule total de vendas em 7 dias
//calcule o total vendido
//media diaria
//contar dias > R$ 100,00
//identificar o maior valor vendido

let vendas = [150, 80, 120, 90, 200, 50, 110];
 for (let i=0; i < vendas.length; i++) {
     console.log(vendas[i]);
 }
  console.log("Total de vendas: " + (vendas[0] + vendas[1] + vendas[2] + vendas[3] + vendas[4] + vendas[5] + vendas[6])); 

  //exercicio 02. monitoramento de servidores
  //contar vezes que passou de 80 graus celsius
  //exibir alerta critico se > 90 graus celsius
  //informar media de temperatura

let temperatura = [78, 98, 100, 120, 38, 47]; 
let contador = 0;
let adição = 0
let media = adição / temperatura.length;
    for (let i=0; i < temperatura.length; i++) {
        if (temperatura[i] > 80) {
        contador++; }
        if (temperatura[i] > 90) {
            console.log("Alerta critico: " + temperatura[i] + " graus celsius");
        } 
        adição += temperatura[i];
    }
    media = adição / temperatura.length;
    console.log("Vezes acima de 80°C: " + contador);
    console.log("Média de temperatura: " + media.toFixed(2) + "°C");
    
//exercicio 03. controle de estoque     
//contar produtos sem estoque (quantidade = 0)
//identificar estoque baixo (quantidade < 5)
//informar a quantidade total de produtos em estoque

let estoque = [10, 0, 3, 5, 0, 8, 2];
let semEstoque = 0;
let estoqueBaixo = 0;
let totalEstoque = 0;
    for (let i=0; i < estoque.length; i++) {
        if (estoque[i] === 0) {
            semEstoque++;
        } else if (estoque[i] < 5) {    
            estoqueBaixo++;
        }
        totalEstoque += estoque[i];

    }
    console.log("Produtos sem estoque: " + semEstoque);
    console.log("Produtos com estoque baixo: " + estoqueBaixo);
    console.log("Quantidade total em estoque: " + totalEstoque);    

    //eexercicio 04. análise de notas escolares
    //contar aprovados (>=7)
    //contar reprovados (<7)
    //calcular média 
    //mostrar a maior nota

let notas = [8,7, 3, 5, 9, 6, 4];
let passaram = 0;
let reprovados = 0;
let soma = 0;
let medias = soma / notas.length;
let maiorNota = notas[0];  
    for (let i=0; i < notas.length; i++) {
        if (notas[i] >= 7) {
            passaram++;
        } else {
            reprovados++;
        }
        soma += notas[i];
        if (notas[i] > maiorNota) {
            maiorNota = notas[i];
        }
    }   
    console.log("Alunos aprovados: " + passaram);
    console.log("Alunos reprovados: " + reprovados);
    console.log("Média das notas: " + medias.toFixed(2));
    console.log("Maior nota: " + maiorNota);    

//exercicio 05. casa inteligente
//calcular consumo total de energia
//identificar os dias de consumo elevado (> 50 kWh)
//verificar consum critico (> 58 kWh)
//calcular média de consumo

let consumo = [45, 52, 60, 48, 55, 30, 65];
let consumoTotal = 0;
let diasElevados = 0;
let diasCriticos = 0;
let mediaConsumo = consumoTotal / consumo.length;     

    for (let i=0; i < consumo.length; i++) {
        consumoTotal += consumo[i];
        if (consumo[i] > 50) {
            diasElevados++;
        }
        if (consumo[i] > 58) {
            diasCriticos++;
        }   
    }
    mediaConsumo = consumoTotal / consumo.length;
    console.log("Consumo total de energia: " + consumoTotal + " kWh");
    console.log("Dias de consumo elevado (> 50 kWh): " + diasElevados);
    console.log("Dias de consumo crítico (> 58 kWh): " + diasCriticos);
    console.log("Média de consumo: " + mediaConsumo.toFixed(2) + " kWh");
