import { Book, DamageLogger, Author, Librarian } from './interfaces';

/**
 * UniversityLibrarian implements Librarian
 */
class UniversityLibrarian implements Librarian {


    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);
    }

}

/**
 * ReferenceItem
 */
class ReferenceItem {

    private _publisher :string;
    static department:string = 'Research';
    
    public get publisher() : string {
        return this._publisher.toUpperCase();
    }

    
    public set publisher(v : string) {
        this._publisher = v;
    }
    
    

    constructor(public title:string, private year:number) {
        console.log('New ReferenceItem instance create...');
    }

    printItem():void{
        console.log(`${this.title} was written in ${this.year} published by ${this._publisher}`);
    }

}

export { UniversityLibrarian, ReferenceItem };