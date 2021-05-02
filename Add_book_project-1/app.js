//  Book constructot
function Book(title, authot, isbn) {
  this.title = title;
  this.author = authot;
  this.isbn = isbn;
}

// UI constructor
function UI() {}

// Add book to list
UI.prototype.addBookToList = function(book) {
const list = document.getElementById('book-list');

// creat tr element
const row =  document.createElement('tr');

row.innerHTML = `
<td>${book.title}</td>
<td>${book.about}</td>
<td>${book.isdn}</td>
<td><a href="#" class="delete">X<a></td>
`;

list.appendChild(row);
}



// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
  
  // Get form values
  const title = document.getElementById('title').Value,
  author = document.getElementById('author').Value,
  isbn = document.getElementById('isbn').value

// instantiant book
const book = new Book(title, author, isbn);

// Instantiate UI
const ui = new UI();

// Add book to list
ui.addBookToList(book);

console.log(book);

  e.preventDefault();
});