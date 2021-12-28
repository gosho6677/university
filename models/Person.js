class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        if (!value) {
            throw new Error('Please provide first name!');
        } else if (typeof value !== 'string') {
            throw new Error('First name must be a string!');
        }

        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        if (!value) {
            throw new Error('Please provide last name!');
        } else if (typeof value !== 'string') {
            throw new Error('Last name must be a string!');
        }

        this._lastName = value;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

module.exports = Person;