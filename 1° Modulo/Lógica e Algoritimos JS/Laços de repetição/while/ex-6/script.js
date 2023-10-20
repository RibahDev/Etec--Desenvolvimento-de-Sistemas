// 6) Escreva um programa que leia um valor (N) inteiro, digitado pelo usuário teclado e imprima os N primeiros números ímpares. Exemplo: ditando 5, o programa deverá exibir os 5 primeiros ímpares (1,3,5,7,9).
let qtd = Number(prompt("Escolha quantos números impares serão exibidos:"));
let numImpar = 1;
let i = 0;
while(i < qtd){
    alert(numImpar);
    numImpar += 2;
    i++;
}