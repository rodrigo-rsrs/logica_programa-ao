#include <stdio.h>

int main(){

    float c,f,k;

    printf("Digite a temperatura em Celsius: ");
    scanf("%f",&c);

    f=c*1.8+32;
    k=c+273.15;

    printf("Celsius: %.2f\n",c);
    printf("Fahrenheit: %.2f\n",f);
    printf("Kelvin: %.2f\n",k);

    return 0;
}
