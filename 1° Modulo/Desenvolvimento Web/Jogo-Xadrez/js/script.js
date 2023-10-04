let tabuleiro = Array(9).fill(null);
let jogadorAtual = 'x';
let jogoTerminou = false;

function fazerJogada(indice) {
    if (tabuleiro[indice] || jogoTeminou) return;

    tabuleiro[indice] = jogadorAtual;
    atualizarTabuleiro();

    if(verificarVencedor()) {
        alert(`${jogadorAtual} venceu!`);
        jogoTeminou = true;
        return;
    }

    if(tabuleiro.every(celula => celula )) {
        alert(`Empate!`);
        jogoTerminou = true;
        return;
    }

    if(jogadorAtual === `X`) {
        jogadorAtual = `O`;
        setTimeout(jogadaComputador, 1000);
    } else {
        jogadorAtual = `X`;
    }
}

function atualizarTabuleiro() {
    const celulas = document.querySelectorAll(`.celula`);
    for(let i = 0; i < 9; i++) {
        celulas[i].textContent = tabuleiro[1];

        // Removendo classes anteriormente adicionadas
    }
}
