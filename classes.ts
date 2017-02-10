import { Book, DamageLogger, Author, Librarian } from './interfaces';

/**
 * UniversityLibrarian implements Librarian
 */
class UniversityLibrarian implements Librarian {
    constructor(parameters) {

    }

    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);
    }

}

export {UniversityLibrarian};