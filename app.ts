

function getAllBooks() {

    let books = [
        { title: 'Ulysses', author: 'James Joyce', available: false, category: Category.Fiction },
        { title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
    ];

    return books;
}

function logFirstAvailable(books): void {
    let numberOfBooks: number = books.length;
    let firstAvailable : string = '';

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

function logBookTitles(titles : string[]): void {
    for (let title of titles) {
        console.log(title);
    }
}

const poetryBooks = getBookTitlesByCategory(Category.Poetry);

logBookTitles(poetryBooks); 