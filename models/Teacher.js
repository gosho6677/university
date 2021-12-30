const Person = require('./Person');

class Teacher extends Person {
    constructor(title, firstName, lastName) {
        super(firstName, lastName);
        this.title = title;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if(typeof value !== 'string') {
            throw new Error('Please select correct title!');
        }

        this._title = value;
    }
}

module.exports = Teacher;