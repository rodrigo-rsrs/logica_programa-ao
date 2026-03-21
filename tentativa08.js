let tipo_cliente = "pj"
let renda = 20000
let valorPleno 
let categoria 

if (tipo_cliente == "pf") {
    if (renda <= 2000) {
        valorPleno = 100
        categoria = "Basico"
    } else if (renda > 2000 && renda <= 5000) {
        valorPleno = 200
        categoria = "intermediario"
    } else if (renda > 5000 && renda <= 10000) {
        valorPleno = 300
        categoria = "Avançado"
    } else if (renda > 10000) {
        valorPleno = 400
        categoria = "premium"
    }
} else if (tipo_cliente == "pj") {
    if (renda <= 10000) {
        valorPleno = 500
        categoria = "Basico PJ"
    } else if (renda > 10000 && renda <= 50000) {
        valorPleno = 1000
        categoria = "Profissional PJ"
    } else if (renda > 50000) {
        valorPleno = 2000
        categoria = "Empresa"
    }
}
console.log("Tipo: " + tipo_cliente)
console.log("Renda: R$ " + renda)
console.log("Valor: R$ " + valorPleno)
console.log("Categoria: " + categoria)
    