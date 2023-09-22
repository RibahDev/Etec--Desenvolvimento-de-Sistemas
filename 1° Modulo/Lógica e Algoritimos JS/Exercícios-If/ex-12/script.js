let mun = prompt("Digite o nome do Municipio:");
let branco = Number(prompt("Digite o total de votos em Brancos:"));
let val = Number(prompt("Digite o total de votos Válidos:"));
let nul = Number(prompt("Agora digite o total de votos nulos:"));
let total = nul + val + branco
let pn = (nul / total) * 100;
let pval = (val / total) * 100;
let pb = (branco / total) * 100;
alert(`Total de Votos em ${mun} é de ${total}, a porcentagem de votos nulos é de ${pn}%, a porcentagem de votos brancos é de ${pb}% e a porcentagem de votos validos é de ${pval}%`)