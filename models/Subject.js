class Subject {
    constructor(name, credits, teacherId) {
        this.name = name;
        this.credits = credits;
        this.teacherId = teacherId;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (!value) {
            throw new Error('Please provide a name for the subject!');
        } else if (typeof value !== 'string') {
            throw new Error('The name of the subject must be a string!');
        }
        
        this._name = value;
    }

    get credits() {
        return this._credits;
    }

    set credits(value) {
        if(typeof value !== 'number' || !Number.isInteger(value)) {
            throw new Error('Please provide an integer value!');
        }

        this._credits = value;
    }

    get teacherId() {
        return this._teacherId;
    }

    set teacherId(val) {
        if(typeof val !== 'number') {
            throw new Error('Please provide a valid ID');
        }

        this._teacherId = val;
    }
}

module.exports = Subject;