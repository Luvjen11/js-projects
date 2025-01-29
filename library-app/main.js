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
            <button class="toggle-read">${book.read ? "Read" : "Not Read"}</button>
            <button class="remove-btn">Remove</button>
            
        `;

        // add "Remove" button;
        bookCard.querySelector(".remove-btn").addEventListener("click",() =>{
            myLibrary.splice(index, 1); // remove book from library;
            displayBooks(); // update display;  
        });

        // add "Toggle Read" button;
        newbook.querySelector(".toggle-read").addEventListener("click", () => {
            book.read = !book.read;
            displayBooks(); // update display;
        });
        // append book card to the book display section;
        bookContainer.appendChild(bookCard);
    });
}
