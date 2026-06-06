#include <stdio.h>

int main() {

    int nota;

    printf("Informe uma nota:\n");
    scanf("%d", &nota);
    
    if(nota < 0 || nota > 10){
    printf("Nota invalida");
    
    }else if(nota >= 10 || nota >= 9){
    printf("Excelente");
    
    }else if(nota >= 8 || nota >= 7){
    printf("Bom");
    
    }else if(nota >= 6 || nota >= 5){
    printf("Regular");
    
    }else{
    printf("Insuficiênte");
    }
    
    return 0;
    }