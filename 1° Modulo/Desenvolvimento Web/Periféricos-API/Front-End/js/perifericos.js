document. addEventListener('DOMContentLoaded', function() {
    const perifericosContainer = document.getElementById('perifericos');

    function carregarperifericos() {
        fetch('http://localhost:3000/perifericos')
            .then(response => response.json())
            .then(perifericos => {
                perifericos.forEach(periferico => {
                    const div = document.createElement('div');
                    div.className = 'periferico';
                    div.setAttribute('data-id', periferico.perifericoID);
                    div.innerHTML = `
                        <img src="img/${periferico.perifericoID}.png" alt="${periferico.perifericoNome}">
                        <div class="nome">${periferico.perifericoNome}</div>
                    `;
                    perifericosContainer.appendChild(div);
                });
            })
            .catch(error => console.error('Erro ao buscar perifericos:', error));
    }
    carregarperifericos();
});