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


// --- MENU ---
while (menuAtivo) {

    opcao = prompt(
        "1. Cadastrar Pedido\n" +
        "2. Listar Pedidos\n" +
        "3. Resumo\n" +
        "4. Buscar Pedido\n" +
        "5. Sair"
    )

    switch (opcao) {

        // cadastro
        case "1":

            codigo = prompt("Código:")
            produto = prompt("Produto:")
            quantidade = parseInt(prompt("Quantidade:"))
            setor = prompt("Setor:")
            prazo = parseInt(prompt("Prazo:"))

            // prioridade
            if (prazo <= 2) {
                prioridade = "URGENTE"
            } else if (prazo <= 5) {
                prioridade = "ALTA"
            } else {
                prioridade = "NORMAL"
            }

            listaPedidos.push({
                codigo: codigo,
                produto: produto,
                quantidade: quantidade,
                setor: setor,
                prazo: prazo,
                prioridade: prioridade
            })

            console.log("Cadastrado")
            break


        // listar
        case "2":

            if (listaPedidos.length == 0) {
                console.log("Vazio")
            } else {

                for (let i = 0; i < listaPedidos.length; i++) {
                    console.log(
                        listaPedidos[i].codigo + " - " +
                        listaPedidos[i].produto + " - " +
                        listaPedidos[i].prioridade
                    )
                }
            }

            break


        // resumo
        case "3":

            totalItens = 0
            urgentes = 0

            for (let i = 0; i < listaPedidos.length; i++) {

                totalItens += listaPedidos[i].quantidade

                if (listaPedidos[i].prioridade == "URGENTE") {
                    urgentes++
                }
            }

            console.log("Total: " + listaPedidos.length)
            console.log("Quantidade: " + totalItens)
            console.log("Urgentes: " + urgentes)

            break


        // buscar
        case "4":

            termoBusca = prompt("Código:")
            achou = false

            for (let i = 0; i < listaPedidos.length; i++) {

                if (listaPedidos[i].codigo == termoBusca) {
                    console.log(listaPedidos[i])
                    achou = true
                    break
                }
            }

            if (achou == false) {
                console.log("Não achou")
            }

            break


        // sair
        case "5":
            menuAtivo = false
            console.log("Saiu")
            break

        default:
            console.log("Erro")
            break
    }
}
