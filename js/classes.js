"use strict";
/**
 * UniversityLibrarian implements Librarian
 */
var UniversityLibrarian = (function () {
    function UniversityLibrarian(parameters) {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + ' is assisting ' + custName);
    };
    return UniversityLibrarian;
}());
exports.UniversityLibrarian = UniversityLibrarian;
//# sourceMappingURL=classes.js.map