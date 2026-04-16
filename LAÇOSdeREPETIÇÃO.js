const prompt = require("prompt-sync")()

// função pra pausar
function pausa() {
    prompt("\nenter pra continuar...")
}

// logo
console.clear()
console.log("===================================")
console.log("      >>> SISTEMA PEDIDOS <<<      ")
console.log("===================================")


// variáveis
let listaPedidos = []
let menuAtivo = true

let opcao

let codigo
let produto
let quantidade
let setor
let prazo
let prioridade

let totalItens
let urgentes

let termoBusca
let achou


// menu
while (menuAtivo) {

    console.log("\n----------------------")
    console.log("1- cadastrar")
    console.log("2- listar")
    console.log("3- resumo")
    console.log("4- buscar")
    console.log("5- sair")
    console.log("----------------------")

    opcao = prompt("opcao: ").trim()

    console.clear()


    switch (opcao) {

        case "1":

            console.log("=== cadastro ===")

            codigo = prompt("codigo: ")
            produto = prompt("produto: ")

            quantidade = parseInt(prompt("quantidade: "))
            if (isNaN(quantidade)) quantidade = 0

            setor = prompt("setor: ")

            prazo = parseInt(prompt("prazo: "))
            if (isNaN(prazo)) prazo = 0

            if (prazo <= 2) {
                prioridade = "URGENTE"
            } else if (prazo <= 5) {
                prioridade = "ALTA"
            } else {
                prioridade = "NORMAL"
            }

            listaPedidos.push({
                codigo,
                produto,
                quantidade,
                setor,
                prazo,
                prioridade
            })

            console.log("\ncadastrado!")
            pausa()
            console.clear()
            break


        case "2":

            console.log("=== lista ===")

            if (listaPedidos.length == 0) {
                console.log("vazio")
            } else {
                for (let i = 0; i < listaPedidos.length; i++) {
                    console.log(
                        listaPedidos[i].codigo + " - " +
                        listaPedidos[i].produto + " - " +
                        listaPedidos[i].prioridade
                    )
                }
            }

            pausa()
            console.clear()
            break


        case "3":

            console.log("=== resumo ===")

            totalItens = 0
            urgentes = 0

            for (let i = 0; i < listaPedidos.length; i++) {

                totalItens += listaPedidos[i].quantidade

                if (listaPedidos[i].prioridade == "URGENTE") {
                    urgentes++
                }
            }

            console.log("pedidos: " + listaPedidos.length)
            console.log("qtd: " + totalItens)
            console.log("urgentes: " + urgentes)

            pausa()
            console.clear()
            break


        case "4":

            console.log("=== busca ===")

            termoBusca = prompt("codigo: ")
            achou = false

            for (let i = 0; i < listaPedidos.length; i++) {

                if (listaPedidos[i].codigo == termoBusca) {
                    console.log(listaPedidos[i])
                    achou = true
                    break
                }
            }

            if (!achou) {
                console.log("nao achou")
            }

            pausa()
            console.clear()
            break


        case "5":
            console.log("encerrando...")
            menuAtivo = false
            break


        default:
            console.log("erro")
            pausa()
            console.clear()
            break
    }
}
