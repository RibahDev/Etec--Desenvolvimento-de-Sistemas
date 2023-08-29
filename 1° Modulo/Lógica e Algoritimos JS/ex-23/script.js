/*
9) Elabore um algoritme que leia o ano de nascimento do usuário e informe se ele pode ou não votar. Faça uma pesquisa para descobrir os limites de idades em que o voto deve ser proibido, obrigatório ou facultativo.

*/

let anoNascimento = Number(prompt('Informe seu ano de nascimento'));

let idade = 2023 - anoNascimento

if (idade >= 16 && idade < 18) {
    alert(`Você tem ${idade} anos e seu voto é facultativo`);
} else if (idade > 18 && idade < 70) {
    alert(`Você tem ${idade} anos e seu voto é obrigatório`);
} else if (idade >= 70){
    alert(`Você tem ${idade} anos e seu voto é facultativo`);
} else {
    alert(`Você tem ${idade} anos e você não pode votar`);
}
