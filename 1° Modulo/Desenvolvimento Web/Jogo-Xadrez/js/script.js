let tabuleiro = Array(9).fill(null);
let jogadorAtual = 'X';
let jogoTerminou = false;

function fazerJogada(indice) {
    if (tabuleiro[indice] || jogoTerminou) return;

    tabuleiro[indice] = jogadorAtual;
    atualizarTabuleiro();

    if(verificarVencedor()) {
        alert(`${jogadorAtual} venceu!`);
        jogoTerminou = true;
        return;
    }

    if(tabuleiro.every(celula => celula )) {
        alert(`Empate!`);
        jogoTerminou = true;
        return;
    }

    if(jogadorAtual === 'X') {
        jogadorAtual = 'O';
        setTimeout(jogadaComputador, 1000);
    } else {
        jogadorAtual = 'X';
    }
}

function atualizarTabuleiro() {
    const celulas = document.querySelectorAll(`.celula`);
    for(let i = 0; i < 9; i++) {
        celulas[i].textContent = tabuleiro[i];

        // Removendo classes anteriormente adicionadas
        celulas[i].classList.remove('x');
        celulas[i].classList.remove('o');

        if(tabuleiro[i] === 'X') {
            celulas[i].classList.add('x');
        } else if(tabuleiro[i] === 'O') {
            celulas[i].classList.add('o');
        }
    }
}

function verificarVencedor() {
    const padroesVitoria = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let padrao of padroesVitoria) {
        if (tabuleiro[padrao[0]] && tabuleiro[padrao[0]] === tabuleiro[padrao[1]] &&
            tabuleiro[padrao[1]] === tabuleiro[padrao[2]]) {
                return true;
            }
    }
    return false;
}

function jogadaComputador() {
    let jogadasDisponiveis = tabuleiro.map((celula, indice) => celula ? -1 : indice).filter(indice => indice !== -1);
    let jogada = jogadasDisponiveis[Math.floor(Math.random() * jogadasDisponiveis.length)];
    tabuleiro[jogada] = jogadorAtual;
    atualizarTabuleiro();

    if(verificarVencedor()) {
        alert(`${jogadorAtual} Venceu!`);
        jogoTerminou = true;
        return;
    }

    if(tabuleiro.every(celula => celula)) {
        alert(`Empate!`);
        jogoTerminou = true;
        return;
    }

    jogadorAtual = 'X';
}

document.querySelector("#botaoReiniciar").addEventListener("click", function() {
    tabuleiro = Array(9).fill(null);
    jogadorAtual = 'X';
    jogoTerminou = false;
    atualizarTabuleiro();
});
