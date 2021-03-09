import { v4 as uuidv4 } from 'uuid';

export default class User {
    id!: string
    email!: string;
    password!: string;

    constructor(email, password, id = null) {
        this.email = email;
        this.password = password
        this.id = id || uuidv4();
    }

}