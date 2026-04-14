const prompt = require('prompt-sync')();

//base inicial
let ListinhaDePedidos = [];
let opcao;
let prioridade;
let codigo;
let produtos;
let prazo;
let quantidade;

//menu
while (true) {
    console.log('\n-------Menu-------');
    console.log('1. Cadastrar');
    console.log('2. Listar');
    console.log('3. Sair');

    opcao = prompt("Escolha: ");

    //opcoes do menu
    if (opcao === '1') {
        let pedido = prompt("Digite o pedido: ");
        ListinhaDePedidos.push(pedido);
        console.log("Pedido cadastrado!");
    }

    else if (opcao === '2') {
        console.log("\nLista de pedidos:");
        console.log(ListinhaDePedidos);
    }

    else if (opcao === '3') {
        console.log("Saindo...");
        break;
    }

    else {
        console.log("Opção inválida!");
    }
}

ListinhaDePedidos.push(pedido)
console.log(" castrado com sucesso ")

