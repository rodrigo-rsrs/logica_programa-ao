#include <stdio.h>

int main() {
    char nome[50];
    int idade;
    char cidade[50];
    
    printf("Infome seu nome: ");
    scanf(" %[^\n]", nome);
    
    printf("Informe sua idade: ");
    scanf(" %d", &idade);
    
    printf("Informe sua cidade: ");
    scanf(" %[^\n]", cidade);
    
    printf("\nolá, meu nome é %s, tenho %d anos e sou de %s. \n ", nome,idade,cidade);
    
    return 0;
}
