include <stdio.h>

int main() {

    char nome[100];
    int idade;
    char cidade[100];

    printf("Digite seu nome completo: ");
    fgets(nome, 100, stdin);

    printf("Digite sua idade: ");
    scanf("%d", &idade);

    getchar();

    printf("Digite sua cidade: ");
    fgets(cidade, 100, stdin);

    printf("\nOlá! Meu nome é %s", nome);
    printf("Tenho %d anos e sou de %s", idade, cidade);

    return 0;
}
