import promptSync from 'prompt-sync';
const prompt = promptSync();

let vetor = [];

console.log("Preencha o vetor com 5 números inteiros:");
for (let i = 0; i < 5; i++) {
    vetor[i] = Number(prompt(`Digite o ${i + 1}º número: `));
}

// ===== Menu =====
let opcao;

do {
    console.log("\n===== MENU =====");
    console.log("1. Soma do vetor");
    console.log("2. Produto do vetor");
    console.log("3. Multiplicar todos os elementos por 5");
    console.log("4. Mudar elemento do vetor");
    console.log("5. Ordenar vetor (Bubble Sort)");
    console.log("6. Inverter vetor");
    console.log("7. Mostrar vetor");
    console.log("0. Sair");

    opcao = Number(prompt("Escolha: "));

    switch (opcao) {
        case 1:
            console.log("Soma =", somaVetor(vetor));
            break;
    
        case 2:
            console.log("Produto =", multiplicaVetor(vetor));
            break;
        case 3:
            multiplicarPorCinco(vetor);
            console.log("Vetor atualizado!");
            break;
        case 4:
            mudarElemento(vetor);
            break;
        case 5:
            ordenarVetor(vetor);
            console.log("Vetor ordenado!");
            break;
        case 6:
            inverterVetor(vetor);
            console.log("Vetor invertido!");
            break;
        case 7:
            mostrarVetor(vetor);
            break;
        case 0:
            console.log("Saindo do programa...");
            break;
        default:
            console.log("Opção inválida!");
    }

} while (opcao !== 0);

function somaVetor(vetor) {
    let soma = 0;

    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }

    return soma;
}

function multiplicaVetor(vetor) {
    let produto = 1;

    for (let i = 0; i < vetor.length; i++) {
        produto *= vetor[i];
    }

    return produto;
}

function multiplicarPorCinco(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        vetor[i] *= 5;
    }
}

function mudarElemento(vetor) {
    let posicao = Number(prompt("Digite a posição (0 a 4): "));
    let novoValor = Number(prompt("Digite o novo valor: "));

    if (posicao >= 0 && posicao < vetor.length) {
        vetor[posicao] = novoValor;
        console.log("Elemento alterado!");
    } else {
        console.log("Posição inválida!");
    }
}

function ordenarVetor(vetor) {
    // Bubble Sort
    for (let i = 0; i < vetor.length - 1; i++) {
        for (let j = 0; j < vetor.length - 1 - i; j++) {
            if (vetor[j] > vetor[j + 1]) {
                let temp = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = temp;
            }
        }
    }
}

function inverterVetor(vetor) {
    vetor.reverse();
}

function mostrarVetor(vetor) {
    console.log("Vetor:", vetor);
}