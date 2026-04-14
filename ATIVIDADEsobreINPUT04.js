//missão 04. cadastro com menu
//objetivo. criar menu
//cadastrar
//listar
//sair
//o sistema roda ate escolher sair

const prompt = require('prompt-sync')();

let opcao = '';
let cadastro = [];

//MENU DO SCRIPT
while (opcao !== '3') {
    console.log('\nMenu:');
    console.log('1. Cadastrar');
    console.log('2. Listar');
    console.log('3. Sair');

    opcao = prompt('Escolha uma opção: ');

    //CADASTRO DO USUARIO
    if (opcao === '1') {
        let nome = prompt('Digite o nome: ');
        cadastro.push(nome);
        console.log('Cadastrado com sucesso!');
    } 

    //LISTA DE ALUNOS
    
    else if (opcao === '2') {
        console.log('\nLista de cadastrados:');

        if (cadastro.length === 0) {
            console.log('Nenhum cadastro ainda.');
        } else {
            cadastro.forEach((item, index) => {
                console.log(`${index + 1}. ${item}`);
            });
        }
    } 
    
    // SAIDA DO SITEMA
    else if (opcao === '3') {
        console.log('Saindo do sistema...');
    } 
    
    else {
        console.log('Opção inválida!');
    }
}