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

//show alert
UI.prototype.showAlert = function(message, className){
  //Creat div
  const div = document.createElement('div');
  //add classes
  div.className = `alert ${className}`;

  //add text
  div.appendChild(document.createTextNode(message));

  //get parent

  const container = document.querySelector('.container');

  //get form
  const form = document.querySelector('#book-form');
// Insert alert
  container.insertBefore(div, form);

  // Timeout after 3 sec
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);
}

// Deleted book 

UI.prototype.deleteBook= function(target) {
  if(target.className ==='delete') {
    target.parentElement.parentElement.remove();
  }
}



// Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
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

// validation
if(title === '' || author === '' || isbn === ''){
  ui.showAlert('please fill in all fields', 'error');
}else {
  


// Add book to list
ui.addBookToList(book);

 // Show success
 ui.showAlert('Book Added!', 'success');

// Clear fields
ui.clearFields();
}
 

  e.preventDefault();
});

// Event Lsitnerat for delete

document.getElementById('book-list').addEventListener('click', function(e){

 const ui = new UI(); 

 //Delete book
 ui.deleteBook(e.target);

 //show message 
 ui.showAlert('Book removed!', 'success');

  e.preventDefault();
})