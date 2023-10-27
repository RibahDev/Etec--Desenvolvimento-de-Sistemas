// 5) - 5)	Faça um programa que simule a urna eletrônica. A tela a ser apresentada deverá ser da seguinte forma:
var candidato = null;
var totalVotos = 0;
var votoPrimeiro = null;
var votoSegundo = null;
var votoTerceiro = null;
var branco = null;
var nulo = null;

alert("Lista de candidatos:\n1- Claudia Rodrigues\n2-Carlos Luz\n3-Neves Rocha\n4-Nulo\n5-Branco");

while(candidato != 0 ) {
    
    candidato = Number(prompt("Digite o número Referente ao seu candidato, ou '0' para sair:"));

    if(candidato == 1) {
        votoPrimeiro += 1;
    }
    if(candidato == 2) {
        votoSegundo += 1

    }
    if(candidato == 3) {
        votoTerceiro += 1;

    }
    if(candidato == 4) {
        nulo += 1;
    }
    if(candidato == 5) {
        branco += 1;
    }    
}
totalVotos = votoPrimeiro + votoSegundo + votoPrimeiro;
// A)
alert(`Candidato 1 = ${votoPrimeiro} votos\nCandidato 2 = ${votoSegundo} votos\nCandidato 3 = ${votoTerceiro} votos`);

// B)
alert(`A % de votos nulos é: ${nulo * totalVotos / 100}`);
// C)
alert(`A % de votos Brancos é: ${branco * totalVotos / 100}`);
// D)
if(votoPrimeiro > votoSegundo || votoSegundo < votoTerceiro) {
    alert("Candidata Claudia Rodrigues Venceu!");
}
if(votoSegundo > votoPrimeiro || votoPrimeiro < votoTerceiro) {
    alert("Candidato Carlos Luz Venceu!");
}else {
    alert("Candidato Neves Rocha Venceu!");
}

