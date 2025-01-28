const myLibrary = [];

//constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// add new book
function addBookToLibrary() {
  const title = document.getElementById("book").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read =
    document.querySelector('input[name="read"]:checked')?.value || "not-read";

  // Ensure all fields are filled
  if (!title || !author || !pages) {
    alert("Please fill in all fields!");
    return;
  }

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);

  // Reset the form after submission
  document.querySelector("form").reset();

  // Update the display
  displayBooks();
}

// display the new added book
function displayBooks() {}
