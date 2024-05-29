document.getElementById('fetchPokemonBtn').addEventListener('click', fetchPokemonInfo);

function fetchPokemonInfo() {
    const pokemonNameOrId = document.getElementById('pokemonInput').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}/`;

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        displayPokemonInfo(data);
    })
    .catch(error => {
        console.error('Error fetching Pokémon data:', error);
        displayError(error);
    });
}

function displayPokemonInfo(data) {
    const pokemonInfoDiv = document.getElementById('pokemonInfo');
    pokemonInfoDiv.innerHTML = `
    <h2>${data.name}</h2>
    <img src="${data.sprites.front_default}" alt="${data.name}">
    <p><strong>Height:</strong> ${data.height} decimetres</p>
    <p><strong>Weight:</trong> ${data.weight} hectograms</p>
    `;
}

function displayError(error) {
    const pokemonInfoDiv = document.getElementById('pokemonInfo');
    pokemonInfoDiv.innerHTML = `<p>Error: ${error.message}</p>`;
}