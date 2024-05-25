document.getElementById('searchButton').addEventListener('click', function() {
    const ingredient = document.getElementById('ingredient').value.trim();
    if (ingredient === '') {
        alert('Please enter an ingredient');
        return;
    }

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';
            if (data.meals) {
                data.meals.forEach(meal => {
                    const mealDiv = document.createElement('div');
                    mealDiv.classList.add('recipe');
                    mealDiv.innerHTML = `
                    <h3>${meal.strMeal}</h3>
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="200">
                    `;
                    resultsDiv.appendChild(mealDiv);
                });
            } else {
                resultsDiv.innerHTML = `<p>No recipes found for ingredient "${ingredient}".</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching the recipes:', error);
        });  
});