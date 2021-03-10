import dao from './dao';
import * as bcrypt from 'bcrypt';
const saltRounds = 10;

export default class {

    static async getAllItems() {
        return await dao.all("SELECT * FROM items", [])
    }

    static async getItemById(id) {
        return await dao.get("SELECT * FROM items WHERE id = ?", [id])
    }

    static async getUserByEmail(email) {
        return dao.get("SELECT * FROM users WHERE email =?", [email]);
    }

    static async getUserById(id) {
        return dao.get('SELECT * FROM users WHERE id = ?', [id]);
    }
}
