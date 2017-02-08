

function getAllBooks() {

    let books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: false, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
    ];

    return books;
}

function logFirstAvailable(books): void {
    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log('Total books ' + numberOfBooks);
    console.log('First available: ' + firstAvailable);
}

enum Category {
    Biography,
    Poetry,
    Fiction
}


function getBookTitlesByCategory(categoryFilter: Category): Array<string> {
    console.log('Getting books in category : ' + Category[categoryFilter]);
    const allBooks = getAllBooks();
    const filteredBooks: string[] = [];

    for (let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredBooks.push(currentBook.title);
        }
    }

    return filteredBooks;
}


function getBookById(id:number) {
    const allBooks = getAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}


function logBookTitles(titles: string[]): void {
    for (let title of titles) {
        console.log(title);
    }
}

function createCustomerId(name: string, id: number) : string {
    return name + id;
}

//**********************************************************************


let x: number;
let idGenerator: (chars: string, nums: number) => string;
idGenerator = createCustomerId;


let myId: string = idGenerator('john', 12);
console.log(myId);


//const fictionBooks = getBookTitlesByCategory(Category.Fiction);

//fictionBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val));

//console.log(getBookById(2).title);