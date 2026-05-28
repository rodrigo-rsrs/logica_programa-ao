#include <stdio.h>

int main() {
    
    float peso;
    float altura;
    
    printf("Informe seu peso: ");
    scanf("%f", &peso);
    
    printf("Informe sua altura: ");
    scanf("%f", &altura);
    
      float imc = peso / (altura * altura);
    
    if(imc < 18.5){
        printf("Abaixo do peso");
        
    }else if(imc >= 18.5 && imc < 25){
        printf("Peso normal");
         
    }else if(imc >= 25 && imc < 30){
        printf("Acima do peso");
        
    }else{
        printf("Obesidade");
    }
    
    return 0;
}