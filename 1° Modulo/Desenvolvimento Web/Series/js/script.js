fetch('series.json')
    .then(response => response.json())
    .then(data => {
        const comicList = document.querySelector('.comic-list');

        data.quadrinhos.forEach(quadrinho => {
            const listItem = document.createElement('li');
            listItem.innerHTML =`<img src="${quadrinho.imagem}" alt="${quadrinho.titulo}">`;
            listItem.addEventListener('click', () => showComicDetails(quadrinho));
            comicList.appendChild(listItem);
        });
    });

    function showComicDetails(quadrinho) {
        const modal = document.querySelector('#comic-modal');
        modal.innerHTML = `
        <div class="modal-content">
            <h2>${quadrinho.titulo}</h2> 
            <p>${quadrinho.descricao}</p>
            <img src ="${quadrinho.imagem}" alt="${quadrinho.titulo}">
            <button id="close-modal">Fechar</button>
        </div>`;

        modal.style.display = 'flex';

        const closeButton = document.getElementById('close-modal');
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    const modal = document.querySelector('#comic-modal');
    window.addEventListener('click', (event) => {
        if(event.target === modal) {
            modal.style.display = 'none';
        }
    });

    