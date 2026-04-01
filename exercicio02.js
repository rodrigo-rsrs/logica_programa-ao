let valorCompra = 350;
let desconto = 0;

if (valorCompra < 100) {
    desconto = 0;
} 
else if (valorCompra >= 100 && valorCompra <= 299.99) {
    desconto = valorCompra * 0.05;
} 
else if (valorCompra >= 300 && valorCompra <= 499.99) {
    desconto = valorCompra * 0.10;
} 
else {
    desconto = valorCompra * 0.15;
}

let valorFinal = valorCompra - desconto;

console.log("Desconto: R$ " + desconto.toFixed(2));
console.log("Valor final: R$ " + valorFinal.toFixed(2)); 


let nota1 = 5;
let nota2 = 6;
let notaRec = 7;

let media = (nota1 + nota2) / 2;

if (media >= 7) {
    console.log("Aprovado");
} 
else if (media < 4) {
    console.log("Reprovado");
} 
else {
    if (notaRec >= 6) {
        console.log("Aprovado na recuperação");
    } else {
        console.log("Reprovado");
    }
}


let idade = 17;
let temAutorizacao = true;

if (idade >= 18) {
    console.log("Acesso liberado");
}
else if (idade >= 16 && temAutorizacao) {
    console.log("Acesso liberado");
}
else {
    console.log("Acesso negado");
}


let bairro = "Centro";
let valorPedido = 50;
let frete;

if (valorPedido >= 80) {
    frete = 0;
}
else if (bairro == "Centro") {
    frete = 5;
}
else if (bairro == "Brotas") {
    frete = 8;
}
else if (bairro == "Itapuã") {
    frete = 12;
}
else {
    frete = 15;
}

let total = valorPedido + frete;

console.log("Frete: R$ " + frete);
console.log("Total: R$ " + total);


let consumoKwh = 150;
let preco;

if (consumoKwh <= 100) {
    preco = 0.60;
}
else if (consumoKwh <= 200) {
    preco = 0.75;
}
else {
    preco = 0.90;
}

let ValorMaximo = consumoKwh * preco;

console.log("Total da conta: R$ " + total.toFixed(2));


let validarSenha = (senha) => {
    if (senha.length < 8) {
        return "Senha inválida: mínimo 8 caracteres";
    } else if (senha.includes("123")) {
        return "Senha inválida: não pode conter '123'";
    } else {
        return "Senha válida";
    }
}
  let calcularBoleto = (valorBoleto, diasAtraso) => {

    if (diasAtraso === 0) {


        return valorBoleto;
    } else {

        let multa = valorBoleto * 0.02;
        let juros = valorBoleto * 0.001 * diasAtraso;
        
        return valorBoleto + multa + juros;

    }
}
