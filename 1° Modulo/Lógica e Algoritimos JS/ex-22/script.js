/*
8) Elabore um algoritmo que dada a idade de um nadador classifica-o em uma das seguintes 
categorias:
   Infantil A --> 5 a 7 anos
   Infantil B --> 8 a 10 anos
   Juvenil A  --> 11 a 13 anos
   Juvenil B  --> 14 a 17 anos
   Adulto     --> Maior ou igual a 18 anos

*/

let idade = Number(prompt('Informe sua idade'));

if (idade <= 7) {
    alert('Você está na categoria INFANTIL A');
} else if (idade <= 10) {
    alert('Você está na categoria INFANTIL B');
} else if (idade <= 13) {
    alert('Você está na categoria JUVENIL A');
} else if (idade <= 17) {
    alert('Você está na categoria JUVENIL B');
} else {
    alert('Você está na categoria Adulto');
}