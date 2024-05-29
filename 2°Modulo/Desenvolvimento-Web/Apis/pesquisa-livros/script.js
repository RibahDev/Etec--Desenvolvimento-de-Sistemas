document.getElementById('searchBtn').addEventListener('click', searchBooks);

function searchBooks() {
    const searchTerm = document.getElementById('bookSearchInput').ariaValueMax;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

    fetch(url)
        .then(response => {
            if(!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            displayBookResults(data);
        })
        .catch(error => {
            console.error('Error fetching book data:', error);
            displayError(error);
        });
}

function displayBookResults(data) {
    const bookResultsDiv = document.getElementById('bookResults');
    bookResultsDiv.innerHTML = '';

    if (data.totalItems === 0) {
        bookResultsDiv.innerHTML = '<p>No books found.</p>';
        return;
    }

    data.items.forEach(item => {
        const book = item.volumeInfo;
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Author(s):</strong> ${book.authors ? book.authors.join(', ') : 'Unknown'}</p>
        <p><strong>Published Date:</strong> ${book.publishedDate}</p>
        <p><strong>Page Count:</strong> ${book.pageCount}</p>
        <p><strong>Description:</strong> ${book.description ? book.description : 'N/A'}</p>
        `;
        bookResultsDiv.appendChild(bookDiv);
    });
}

function displayError(error) {
    const bookResultsDiv = document.getElementById('bookResults');
    bookResultsDiv.innerHTML = `<p>Error: ${error.message}</p>`;
}