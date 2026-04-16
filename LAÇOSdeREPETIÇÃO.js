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

    opcao = prompt(
        "1- Cadastrar\n" +
        "2- Listar\n" +
        "3- Resumo\n" +
        "4- Buscar\n" +
        "5- Sair"
    )

    switch (opcao) {

        case "1":

            codigo = prompt("codigo")
            produto = prompt("produto")
            quantidade = parseInt(prompt("quantidade"))
            setor = prompt("setor")
            prazo = parseInt(prompt("prazo"))

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

            console.log("ok")
            break


        case "2":

            if (listaPedidos.length == 0) {
                console.log("vazio")
            } else {
                for (let i = 0; i < listaPedidos.length; i++) {
                    console.log(
                        listaPedidos[i].codigo + " " +
                        listaPedidos[i].produto + " " +
                        listaPedidos[i].prioridade
                    )
                }
            }

            break


        case "3":

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

            break


        case "4":

            termoBusca = prompt("codigo")
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

            break


        case "5":
            menuAtivo = false
            console.log("fim")
            break


        default:
            console.log("erro")
            break
    }
}
