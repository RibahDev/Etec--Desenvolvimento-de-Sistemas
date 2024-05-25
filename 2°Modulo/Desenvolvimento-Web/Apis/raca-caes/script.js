document.getElementById('getDogButton').addEventListener('click', function() {
    const url = 'https://api.thedogapi.com/v1/images/search';

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';
        const dogData = data[0];
        const dogDiv = document.createElement('div');
        dogDiv.classList.add('dog');
        dogDiv.innerHTML = `
        <img src="${dogData.url}" alt="A cute dog">
    `;
    resultsDiv.appendChild(dogDiv);
})
.catch(error => {
    console.error('Error fetching the dog image:', error)
})
})