// Create an array of book objects where each book has:A
// { title: "Book Name", author: "Author Name", isAvailable: true }

// Write functions to:
//     List all books.
//     Mark a book as borrowed (isAvailable = false).
//     Return a book (isAvailable = true).
//     Find books by a specific author.

const books = [
    { title: "Book1", author: "Author1", isAvailable: true },
    { title: "Book2", author: "Author2", isAvailable: true },
    { title: "Book3", author: "Author3", isAvailable: true },
    { title: "Book4", author: "Author4", isAvailable: true },
    { title: "Book5", author: "Author5", isAvailable: true },
  ];
  
  function listBooks() {
    // Write your code here
    const booksArr=[];
    for(let book of books){
        booksArr.push(book.title);
    }
    return booksArr;
  }
  
  function markAsBorrowed(title) {
    // Write your code here
    for(let book of books){
        if(book.title===title){
            book.isAvailable=false;
        }
    }
    return books;
  }
  
  function returnBook(title) {
    // Write your code here
    for(let book of books){
        if(book.title===title){
            book.isAvailable=true;
        }
    }
    return books;
  }
  
  function findBooksByAuthor(author) {
    // Write your code here
    const booksArr=[];
    for(let book of books){
        if(book.author===author){
            booksArr.push(book);
        }
    }
    return booksArr;
  }

console.log(listBooks());
console.log(markAsBorrowed("Book1"));
console.log(returnBook("Book1"));
console.log(findBooksByAuthor("Author1"));