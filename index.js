// index.js

function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => renderBooks(data))
    .catch(error => console.error(error));
}

function renderBooks(books) {
  const bookListElement = document.getElementById('book-list');
  if (!bookListElement) {
    console.error("Book list element not found");
    return;
  }

  bookListElement.innerHTML = ''; // Clear previous content

  books.forEach(book => {
    const bookTitleElement = document.createElement('li');
    bookTitleElement.textContent = book.title;
    bookListElement.appendChild(bookTitleElement);
  });
}

fetchBooks();

// index.js

function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => renderBooks(data))
    .catch(error => console.error(error));
}

function renderBooks(books) {
  const bookListElement = document.getElementById('book-list');
  if (!bookListElement) {
    console.error("Book list element not found");
    return;
  }

  bookListElement.innerHTML = ''; // Clear previous content

  books.forEach(book => {
    const bookTitleElement = document.createElement('li');
    bookTitleElement.textContent = book.title;
    bookListElement.appendChild(bookTitleElement);
  });
}

fetchBooks();

// Export the fetchBooks function for testing
module.exports = fetchBooks;

