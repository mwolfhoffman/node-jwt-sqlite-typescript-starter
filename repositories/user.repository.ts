import dao from './dao';
import * as bcrypt from 'bcrypt';
import User from '../models/user';
import Item from '../models/item';
const saltRounds = 10;

export default class {

    static async getAllItems(): Promise<Item[]> {
        const items = await dao.all("SELECT * FROM items", [])
        return <Item[]>items
    }

    static async getItemById(id: string): Promise<Item> {
        const item = await dao.get("SELECT * FROM items WHERE id = ?", [id])
        return <Item>item;
    }

    static async getUserByEmail(email: string): Promise<User> {
        const user = await dao.get("SELECT * FROM users WHERE email =?", [email]);
        return <User>user;
    }

    static async getUserById(id: string): Promise<User> {
        const user = await dao.get('SELECT * FROM users WHERE id = ?', [id]);
        return <User>user;
    }

    static async createUser(user: User): Promise<boolean> {
        await bcrypt.hash(user.password, saltRounds, async function (err, hash) {
            if (err) {
                return false;
            }
            const insertUsers = `INSERT INTO users (email, password) VALUES (?,?);`
            try {
                await dao.run(insertUsers, [user.email, hash]);
                return true;
            } catch (ex) {
                console.error(ex)
                return false;
            }
        });
        return true
    }
}
