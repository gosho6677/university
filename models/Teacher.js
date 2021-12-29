const Person = require('./Person');

// const titles = {
//     'assistant': 'Assistant',
//     'senior_assistant': 'Senior Assistant',
//     'associate_professor': 'Associate Professor',
//     'professor': 'Professor'
// };

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
        // if (!titles[value]) {
        //     throw new Error('Please select correct title!');
        // }

        this._title = value;
    }

    // get fullName() {
    //     return `${titles[this.title]} ${super.fullName}`;
    // }
}

module.exports = Teacher;