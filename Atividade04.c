#include <stdio.h>

#define PI 3.14159

int main() {

    int opcao;
    float raio;
    float base;
    float altura;
    float area;

    printf("1 - Circulo\n");
    printf("2 - Retangulo\n");
    printf("3 - Triangulo\n");

    printf("Escolha uma opcao: ");
    scanf("%d", &opcao);

    if(opcao == 1) {

        printf("Digite o raio: ");
        scanf("%f", &raio);

        area = PI * raio * raio;

        printf("Area = %.2f", area);
    }

    if(opcao == 2) {

        printf("Digite a base: ");
        scanf("%f", &base);

        printf("Digite a altura: ");
        scanf("%f", &altura);

        area = base * altura;

        printf("Area = %.2f", area);
    }

    if(opcao == 3) {

        printf("Digite a base: ");
        scanf("%f", &base);

        printf("Digite a altura: ");
        scanf("%f", &altura);

        area = (base * altura) / 2;

        printf("Area = %.2f", area);
    }

    return 0;
}
