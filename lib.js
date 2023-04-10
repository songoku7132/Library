let myLibrary = []
const Display = document.getElementById('display')
const container = document.querySelector('#container')
const $title = document.querySelector('#title')
const $author = document.querySelector('#author')
const $pages = document.querySelector('#pages')
const $read = document.querySelector('#status')
const $boxTitle = document.querySelector('#box-title')
const $boxAuthor = document.querySelector('#box-author')
const $boxPages = document.querySelector('#box-pages')
const $boxRead = document.querySelector('#box-read')

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function createAList(){
    const bookList = document.querySelector('#display')
    bookList.textContent = ''
    for (let i=0;i<myLibrary.length; i++){
        const bookRow = document.createElement('div')
        bookRow.id = `row-${i}`
        Display.appendChild(bookRow)

        const titleBook = document.createElement('div')
        titleBook.classList.add('box')
        titleBook.textContent = myLibrary[i].title
        bookRow.appendChild(titleBook)

        const authorBook = document.createElement('div')
        authorBook.classList.add('box')
        authorBook.textContent = myLibrary[i].author
        bookRow.appendChild(authorBook)

        const pagesBook = document.createElement('div')
        pagesBook.classList.add('box')
        pagesBook.textContent = myLibrary[i].pages
        bookRow.appendChild(pagesBook)

        const readBook = document.createElement('div')
        readBook.classList.add('box')
        readBook.id = `status-${i}`
        readBook.textContent = myLibrary[i].read
        bookRow.appendChild(readBook)

        const changeReadBox = document.createElement('div')
        changeReadBox.classList.add('box')
        bookRow.appendChild(changeReadBox)

        const changeRead = document.createElement('button')
        changeRead.classList.add('delete')
        changeRead.textContent = ('Change status')
        changeRead.addEventListener('click', function(){changeStatus(i)},false)
        changeReadBox.appendChild(changeRead)

        const deleteBookBox = document.createElement('div')
        deleteBookBox.classList.add('box')
        bookRow.appendChild(deleteBookBox)

        const deleteBook =document.createElement('button')
        deleteBook.classList.add('delete')
        deleteBook.textContent = ('Delete')
        deleteBook.addEventListener('click', (event) => {
            myLibrary.splice(i,1)
            let el = document.getElementById(`row-${i}`)
            el.remove()
        })
        deleteBookBox.appendChild(deleteBook)
    }
}

function addBookToLibrary(title,author,pages,read){
    const bookTitle = $title.value
    const bookAuthor = $author.value
    const bookPages = $pages.value
    const bookRead = $read.value
    const Harry = new Book(bookTitle,bookAuthor,bookPages,bookRead)
    myLibrary.push(Harry)
    console.log(myLibrary)
    createAList()
}
function changeStatus(i){
    //console.log(myLibrary[i].read)
    var status = document.getElementById(`status-${i}`)
    //console.log(status.innerText)
    if (status.innerText === 'read'){
        status.innerText = 'not read'
    }else if (status.innerText === 'not read'){
        status.innerText = 'read'
    }
    if (myLibrary[i].read === 'read'){
        myLibrary[i].read = 'not read'
    }else if (myLibrary[i].read === 'not read') {
        myLibrary[i].read = 'read'
    }
    console.log(myLibrary)
}
//function newBook(title){
//    console.log(title)
//    const nb = new Book(title)
//    myLibrary.push(nb.add())
//}
//function bringForm(){
//    const form = document.createElement('form')
//    form.classList.add('gorn')
//    form.style.cssText='border: 2px solid gray; border-radius: 20px;'
//    form.style.height='200px';
//    form.style.width='200px';
//    container.appendChild(form)
//}
//console.log(myLibrary[Book].read)