const Person = require('./Person');

class Student extends Person {
    constructor(firstName, lastName, yearInCollege) {
        super(firstName, lastName);
        this.yearInCollege = yearInCollege;
    }

    get yearInCollege() {
        return this._yearInCollege;
    }

    set yearInCollege(val) {
        if(![1,2,3,4,5].includes(val)) {
            throw new Error('Year must be between 1 and 5');
        }

        this._yearInCollege = val;
    }
}

module.exports = Student;