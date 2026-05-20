#include <stdio.h>

int main() {

    float peso;
    float altura;
    float imc;

    printf("Digite seu peso: ");
    scanf("%f", &peso);

    printf("Digite sua altura: ");
    scanf("%f", &altura);

    imc = peso / (altura * altura);

    printf("Seu IMC e: %.2f\n", imc);

    if (imc < 18.5) {
        printf("Abaixo do peso");
    }

    if (imc >= 18.5 && imc < 25) {
        printf("Normal");
    }

    if (imc >= 25 && imc < 30) {
        printf("Sobrepeso");
    }

    if (imc >= 30) {
        printf("Obesidade");
    }

    return 0;
}
