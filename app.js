function getAllBooks() {
    var books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: false, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
    ];
    return books;
}
function logFirstAvailable(books) {
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total books ' + numberOfBooks);
    console.log('First available: ' + firstAvailable);
}
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
})(Category || (Category = {}));
function getBookTitlesByCategory(categoryFilter) {
    console.log('Getting books in category : ' + Category[categoryFilter]);
    var allBooks = getAllBooks();
    var filteredBooks = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredBooks.push(currentBook.title);
        }
    }
    return filteredBooks;
}
function getBookById(id) {
    var allBooks = getAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
function logBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function createCustomerId(name, id) {
    return name + id;
}
//**********************************************************************
var x;
var idGenerator;
idGenerator = createCustomerId;
var myId = idGenerator('john', 12);
console.log(myId);
//const fictionBooks = getBookTitlesByCategory(Category.Fiction);
//fictionBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val));
//console.log(getBookById(2).title); 
//# sourceMappingURL=app.js.map