import * as sqlite from 'sqlite3'
const sqlite3 = sqlite.verbose();
const db = new sqlite3.Database('./db/sqlite.db');
import * as bcrypt from 'bcrypt';
const saltRounds = 10;

export default class {

    static setupDbForDev() {
        db.serialize(function () {
            //   Drop Tables:
            const dropUsersTable = "DROP TABLE IF EXISTS users";
            db.run(dropUsersTable);
            const dropItemsTable = "DROP TABLE IF EXISTS items";
            db.run(dropItemsTable);
            
            // Create Tables:
            const createUsersTable = "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT,email TEXT, password text)";
            db.run(createUsersTable);
            const createItemsTable = "CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price NUMERIC)";
            db.run(createItemsTable);
            let password = '123'

            bcrypt.hash(password, saltRounds, function (err, hash) {
                const insertUsers = `INSERT INTO users (email, password) VALUES ('foo@bar.com', '${hash}');`
                db.run(insertUsers);
            });
            const insertItems = `INSERT INTO items (name, price) VALUES ('book', 12.99), ('t-shirt', 15.99), ('milk', 3.99);`
            db.run(insertItems);
        });
    }

    static all(stmt, params) {
        return new Promise((res, rej) => {
            db.all(stmt, params, (error, result) => {
                if (error) {
                    return rej(error.message);
                }
                return res(result);
            });
        })
    }
    static get(stmt, params) {
        return new Promise((res, rej) => {
            db.get(stmt, params, (error, result) => {
                if (error) {
                    return rej(error.message);
                }
                return res(result);
            });
        })
    }

    static run(stmt, params) {
        return new Promise((res, rej) => {
            db.run(stmt, params, (error, result) => {
                if (error) {
                    return rej(error.message);
                }
                return res(result);
            });
        })
    }


}
