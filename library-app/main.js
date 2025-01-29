const myLibrary = [];

//constructor
function Book(bookCover, title, author, pages, read) {
  this.bookCover = bookCover;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// add new book
function addBookToLibrary() {
    const fileInput = document.getElementById("book-cover");
    const file = fileInput.files[0]; // Get the uploaded file
  const title = document.getElementById("book").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read =
    document.querySelector('input[name="read"]:checked')?.value || "not-read";

  // Ensure all fields are filled
  if (!file || !title || !author || !pages) {
    alert("Please fill in all fields!");
    return;
  }

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
      const bookCover = reader.result; // Convert image to Base64 URL

      const newBook = new Book(bookCover, title, author, pages, read);
      myLibrary.push(newBook);

      document.querySelector("form").reset();
      displayBooks();
  };
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
            <img src="${book.bookCover}" alt="book cover" class="book-image"/>
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
  document.querySelectorAll(".remove-btn").forEach((button) => {
    button.addEventListener("click", removeBook);
  });

  // add event listener to the toggle read button;
  document.querySelectorAll(".toggle-read-btn").forEach((button) => {
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
  myLibrary[index].read =
    myLibrary[index].read === "read" ? "not-read" : "read";
  displayBooks(); // Refresh display
}
