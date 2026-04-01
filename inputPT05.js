//missão 04. cadastro com menu
//objetivo. criar menu
//cadastrar
//listar
//sair
//o sistema roda ate escolher sair

const prompt = require('prompt-sync')();
  let opcao = '';
  let cadastro = [];

    while (opcao !== '3') {
        console.log('Menu:');
        console.log('1. Cadastrar');
        console.log('2. Listar');
        console.log('3. Sair');
        opcao = prompt('Escolha uma opção: ')
    }