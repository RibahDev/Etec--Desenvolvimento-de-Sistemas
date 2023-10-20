// 4) Faça um algoritmo que imprima a soma dos números multiplos de 11 em um intervalo digitado pelo usuário;
let initial = Number(prompt("Digite um valor Inicial:"));
let finish = Number(prompt("Digite um valor final:"));
let soma = 0;
for(i = initial; i <= finish; i++) {
    if(i % 11 == 0 ) {
        soma += i;
    }
}
alert(soma);