export default class User {
    constructor(id, name, email) {
        this.id = id
        this.name = name
        this.email = email
    }
    toString() {
        return `#${this.id} | ${this.name} | ${this.email}`
    }
}


