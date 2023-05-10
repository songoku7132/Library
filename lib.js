let myLibrary = [];

const Display = document.getElementById("display");
const $title = document.querySelector("#title");
const $author = document.querySelector("#author");
const $pages = document.querySelector("#pages");
const $read = document.querySelector("#status");
const addBtn = document.querySelector("#add-book");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function changeStatus(index) {
  const status = document.getElementById(`status-${index}`);
  if (status.innerText === "read") {
    status.innerText = "not read";
  } else if (status.innerText === "not read") {
    status.innerText = "read";
  }
  if (myLibrary[index].read === "read") {
    myLibrary[index].read = "not read";
  } else if (myLibrary[index].read === "not read") {
    myLibrary[index].read = "read";
  }
}

function createAList(book, index) {
  // const bookList = document.querySelector("#display");
  // bookList.textContent = "";
  // for (let i = 0; i < myLibrary.length; i++) {
  const bookRow = document.createElement("div");
  bookRow.id = `row-${index}`;
  Display.appendChild(bookRow);

  const titleBook = document.createElement("div");
  titleBook.classList.add("box");
  titleBook.textContent = myLibrary[index].title;
  bookRow.appendChild(titleBook);

  const authorBook = document.createElement("div");
  authorBook.classList.add("box");
  authorBook.textContent = myLibrary[index].author;
  bookRow.appendChild(authorBook);

  const pagesBook = document.createElement("div");
  pagesBook.classList.add("box");
  pagesBook.textContent = myLibrary[index].pages;
  bookRow.appendChild(pagesBook);

  const readBook = document.createElement("div");
  readBook.classList.add("box");
  readBook.id = `status-${index}`;
  readBook.textContent = myLibrary[index].read;
  bookRow.appendChild(readBook);

  const changeReadBox = document.createElement("div");
  changeReadBox.classList.add("box");
  bookRow.appendChild(changeReadBox);

  const changeRead = document.createElement("button");
  changeRead.classList.add("delete");
  changeRead.textContent = "Change status";
  changeRead.addEventListener(
    "click",
    () => {
      changeStatus(index);
    },
    false,
  );
  changeReadBox.appendChild(changeRead);

  const deleteBookBox = document.createElement("div");
  deleteBookBox.classList.add("box");
  bookRow.appendChild(deleteBookBox);

  const deleteBook = document.createElement("button");
  deleteBook.classList.add("delete");
  deleteBook.textContent = "Delete";
  deleteBook.addEventListener("click", () => {
    myLibrary.splice(index, 1);
    const el = document.getElementById(`row-${index}`);
    el.remove();
  });
  deleteBookBox.appendChild(deleteBook);
  saveAndRenderBooks();
  // }
}
function addBookToLibrary() {
  const bookTitle = $title.value;
  const bookAuthor = $author.value;
  const bookPages = $pages.value;
  const bookRead = $read.value;
  const Harry = new Book(bookTitle, bookAuthor, bookPages, bookRead);
  myLibrary.push(Harry);
  renderBooks();
}
function renderBooks() {
  Display.textContent = "";
  myLibrary.map((book, index) => {
    createAList(book, index);
  });
}

function saveAndRenderBooks() {
  localStorage.setItem("library", JSON.stringify(myLibrary));
}

function addLocalStorage() {
  myLibrary = JSON.parse(localStorage.getItem("library")) || [];
  renderBooks();
}

addBtn.addEventListener("click", addBookToLibrary);
addLocalStorage();
// localStorage.clear();
