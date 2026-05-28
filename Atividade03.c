#include <stdio.h>

int main() {
    
    float celsius;
    float fahrenheit;
    float kelvin;
    
    printf("Informe a temperatura em celsius: ");
    scanf("%f", &celsius);
    
    fahrenheit = celsius * 1.8 + 32;
    kelvin = celsius + 273.15;
    
    printf("celsius: %2f\n", celsius);
    printf("fahrenheit: %2f\n", fahrenheit);
    printf("kelvin: %2f\n", kelvin);
    
    return 0;
}