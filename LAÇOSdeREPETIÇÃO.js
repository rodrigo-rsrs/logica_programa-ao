// --- VARIÁVEIS ---
let listaPedidos = []
let menuAtivo = true

let opcao

// cadastro
let codigo
let produto
let quantidade
let setor
let prazo
let prioridade

// resumo
let totalItens
let urgentes

// busca
let termoBusca
let achou


//MENU 
while (menuAtivo) {

    opcao = prompt(
        "--- SISTEMA DE PEDIDOS ---\n" +
        "1. Cadastrar Pedido\n" +
        "2. Listar Pedidos\n" +
        "3. Resumo Gerencial\n" +
        "4. Buscar Pedido\n" +
        "5. Sair"
    )


    // MENU/ESCOLHA
    switch (opcao) {

        //CADASTRO DO PEDIDO
        case "1":

            codigo = prompt("Código:")
            produto = prompt("Produto:")
            quantidade = parseInt(prompt("Quantidade:"))
            setor = prompt("Setor:")
            prazo = parseInt(prompt("Prazo (dias):"))

            // VALIDAÇÃO / PRIORIDADE
            if (prazo <= 2) {
                prioridade = "URGENTE"
            } else if (prazo <= 5) {
                prioridade = "ALTA"
            } else {
                prioridade = "NORMAL"
            }

            //SALVAMENTO DE DADOS
            listaPedidos.push({
                codigo,
                produto,
                quantidade,
                setor,
                prazo,
                prioridade
            })

            console.log("Pedido cadastrado!")
            break


        //LISTAGEM DE PEDIDOS
        case "2":

            console.log("--- LISTA DE PEDIDOS ---")

            if (listaPedidos.length === 0) {
                console.log("Nenhum pedido encontrado.")
            } else {

                for (let i = 0; i < listaPedidos.length; i++) {
                    let p = listaPedidos[i]

                    console.log(
                        p.codigo + " | " +
                        p.produto + " | " +
                        p.prioridade
                    )
                }
            }

            break


        //RESUMO GERENCIAL
        case "3":

            totalItens = 0
            urgentes = 0

            for (let i = 0; i < listaPedidos.length; i++) {

                totalItens += listaPedidos[i].quantidade

                if (listaPedidos[i].prioridade === "URGENTE") {
                    urgentes++
                }
            }

            console.log("Total Pedidos: " + listaPedidos.length)
            console.log("Soma Quantidades: " + totalItens)
            console.log("Total Urgentes: " + urgentes)

            break


        //BUSCAR PEDIDOS
        case "4":

            termoBusca = prompt("Digite o código para buscar:")
            achou = false

            for (let i = 0; i < listaPedidos.length; i++) {

                if (listaPedidos[i].codigo === termoBusca) {
                    console.log("Pedido encontrado:")
                    console.log(listaPedidos[i])
                    achou = true
                    break
                }
            }

            if (!achou) {
                console.log("Pedido não localizado.")
            }

            break


        //SAIR
        case "5":

            console.log("Encerrando sistema...")
            menuAtivo = false
            break


        //ERRO
        default:
            console.log("Opção inválida!")
            break
    }
}
