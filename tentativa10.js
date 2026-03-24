let distanciaKm = 10;
let orcamento = 30;

let transporte;

if (distanciaKm <= 2) {
    transporte = "A pé";
} else if (distanciaKm <= 8 && orcamento >= 10) {
    transporte = "Ônibus";
} else if (distanciaKm <= 15 && orcamento >= 25) {
    transporte = "Moto/Carro por app";
} else {
    transporte = "Não é possível com esse orçamento";
}

console.log(transporte);
