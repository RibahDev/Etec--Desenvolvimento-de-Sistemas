// 2)	Faça um programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-vespertino ou N-noturno. Imprima a mensagem “Bom dia!” ou  “Boa Noite” ou “Valor inválido”, conforme o caso. 

let nome = prompt("Digite seu nome:")
let turno = prompt("Escolha o período em que você estuda: 'M'matutino, 'V'vespertino ou 'N'noturno.");

if(turno.toUpperCase() === "M") {
    alert(`Bom dia ${nome}!`);
} else if (turno.toUpperCase() === "V") {
    alert(`Boa tarde ${nome}!`);
} else if (turno.toUpperCase() === "N") {
    alert(`Boa noite ${nome}!`);
}else {
    alert("Valor inválido! Volte e siga os passos.")
}

