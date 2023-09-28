// 5) Faça um algoritmo que imprima o somatório de todos os números entre 1 e um valor digitado pelo usuário. Por exemplo, se o usuário digitar o número 4, o programa deverá calcular o somatório 1 + 2 + 3 + 4 = 10.
let final = Number(prompt("Digite um valor máximo para a soma:"));
let soma = 0 ;

for(i = 0; i <= final; i++) {
    soma +=i;
}
console.log(soma);