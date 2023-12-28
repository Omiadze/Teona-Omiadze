document.addEventListener("DOMContentLoaded", function(){

    const booksList = document.getElementById("books-list")

    const books = [
        {
            name: "Eleven Kinds of Loneliness",
            author: "Richard Yates",
            pages: 240,
            release: 2008
        },
        {
            name: "Liars in Love",
            author: "Richard Yates",
            pages: 288,
            release: 2008
        },
        {
            name: "Wild Palms",
            author: "William Faulkner",
            pages: 304,
            release: 2011
        }
    ]

    books.forEach(books =>{
        const book = document.createElement("li")
        book.classList.add("book-list")

        const bookInfo = document.createElement("div")

        const bookName = document.createElement("h3")
        bookName.textContent = `Name: ${books.name}`
        bookInfo.appendChild(bookName)

        const bookAuthor = document.createElement("h3")
        bookAuthor.textContent = `Author: ${books.author}`
        bookInfo.appendChild(bookAuthor)

        const bookPages = document.createElement("h3")
        bookPages.textContent = `pages: ${books.pages}`
        bookInfo.appendChild(bookPages)

        const bookRelease = document.createElement("h3")
        bookRelease.textContent = `Release Date: ${books.release}`
        bookInfo.appendChild(bookRelease)

        book.appendChild(bookInfo)

        booksList.appendChild(book)
    })
    

})