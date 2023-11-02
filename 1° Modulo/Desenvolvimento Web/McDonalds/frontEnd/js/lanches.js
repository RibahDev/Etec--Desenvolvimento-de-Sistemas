document. addEventListener('DOMContentLoaded', function() {
    const lanchesContainer = document.getElementById('lanches');

    function carregarLanches() {
        fetch('http://localhost:3000/lanches')
            .then(response => response.json())
            .then(lanches => {
                lanches.forEach(lanche => {
                    const div = document.createElement('div');
                    div.className = 'lanche';
                    div.setAttribute('data-id', lanche.lancheId);
                    div.innerHTML = `
                        <img src="img/${lanche.lancheId}.png" alt="${lanche.lancheNome}">
                        <div class="nome">${lanche.lancheNome}</div>
                    `;
                    lanchesContainer.appendChild(div);
                });
            })
            .catch(error => console.error('Erro ao buscar lanches:', error));
    }
    carregarLanches();
});