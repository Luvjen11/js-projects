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
function displayBooks() {

    // select the book display container
    const bookContainer = document.querySelector("book-container");
        //clear current book display;
    bookContainer.innerHTML = "";
    
    // loop through the library and display each book;
    myLibrary.forEach((book, index) => {

        // create a new book card element;
        
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");


        // set book details (title, author, pages, read status);
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Status: ${book.read}</p>
            <button class="toggle-read-btn" data-index="${index}">
                ${book.read === "read" ? "Read" : "Not Read"}
            </button>
            <button class="remove-btn" data-index="${index}">Remove</button>
            
        `;

        // append book card to the book display section;
        bookContainer.appendChild(bookCard);
    });

        // add event listener to the remove button;
        document.querySelectorAll(".remove-btn").forEach(button => {
            button.addEventListener("click", removeBook);
        });

        // add event listener to the toggle read button;
        document.querySelectorAll(".toggle-read-btn").forEach(button => {
            button.addEventListener("click", toggleRead);
        });

}

// add "Remove" button;
function removeBook(e) {
    myLibrary.splice(e.target.dataset.index, 1);
    displayBooks();
}


// add "Toggle Read" button;
function toggleRead(event) {
    const index = event.target.getAttribute("data-index");
    myLibrary[index].read = myLibrary[index].read === "read" ? "not-read" : "read";
    displayBooks(); // Refresh display
}