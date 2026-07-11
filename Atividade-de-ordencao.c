#include <stdio.h>

// Função para ordenar os pedidos
void bubbleSort(int arr[], int tam)
{
    int i, j, temp;

    for(i = 0; i < tam - 1; i++)
    {
        for(j = 0; j < tam - 1 - i; j++)
        {
            if(arr[j] > arr[j + 1])
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// Função para buscar o pedido
int buscaBinaria(int arr[], int tam, int alvo)
{
    int inicio = 0;
    int fim = tam - 1;
    int meio;

    while(inicio <= fim)
    {
        meio = (inicio + fim) / 2;

        if(arr[meio] == alvo)
        {
            return meio;
        }
        else if(alvo > arr[meio])
        {
            inicio = meio + 1;
        }
        else
        {
            fim = meio - 1;
        }
    }

    return -1;
}

int main()
{
    int pedidos[8] = {47, 12, 83, 5, 29, 61, 74, 38};

    int i;
    int alvo;
    int resultado;
    int contador = 0;

    printf("===== Byte Burger - Sistema de Pedidos ====\n\n");
    // Mostrar pedidos recebidos
    printf("Recebidos: ");
    for(i = 0; i < 8; i++)
    {
        printf("%d ", pedidos[i]);
    }
    // Ordenar pedidos
    bubbleSort(pedidos, 8);
    // Mostrar pedidos ordenados
    printf("\n\nOrdenados: ");
    for(i = 0; i < 8; i++)
    {
        printf("%d ", pedidos[i]);
    }
    printf("\n\n");
    do
    {
        printf("Pedido a buscar (0 = sair): ");
        scanf("%d", &alvo);

        if(alvo != 0)
        {
            contador++;
            resultado = buscaBinaria(pedidos, 8, alvo);
            if(resultado != -1)
            {
                printf(">> Pedido #%d encontrado na posicao %d!\n\n", alvo, resultado);
            }
            else
            {
                printf(">> Pedido #%d nao esta na fila.\n\n", alvo);
            }
        }

    } while(alvo != 0);

    printf("%d busca(s) realizada(s). Bom apetite!\n", contador);

    return 0;
}
