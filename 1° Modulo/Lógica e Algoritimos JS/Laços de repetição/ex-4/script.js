// 3) Faça um algoritmo que imprima a quantidade de números pares e a quantidade de números ímpares em um intervalo digitado pelo usuário.
let primeiroValor = Number(prompt("Digite um valor inicial"));
let segundoValor = Number(prompt("Digite um valor maximo"));
var numImpar = 0;
var numPar = 0;
for(let i = primeiroValor; i <= segundoValor; i++){
    if(primeiroValor > segundoValor) {
        console.log("Digite o valor menor primeiro!")
    }else if(i % 2 == 0) {
        let totalP = numPar
        console.log(totalP);
    }
}