let saldo = 100;
let valorCompra = 150;
let Possui_limite = true; 
let valorLimite = 1000;

if (valorCompra <= saldo) {
    console.log("compra aprovada");
} else if (valorCompra > saldo && Possui_limite == true && valorCompra <= valorLimite) {
    console.log("compra aprovada com limite");
} else {
    console.log("compra negada - saldo e limite insuficientes");
}