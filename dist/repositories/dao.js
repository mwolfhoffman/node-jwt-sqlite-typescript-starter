"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite = __importStar(require("sqlite3"));
const sqlite3 = sqlite.verbose();
const db = new sqlite3.Database('./db/sqlite.db');
const bcrypt = __importStar(require("bcrypt"));
const saltRounds = 10;
class default_1 {
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
            let password = '123';
            bcrypt.hash(password, saltRounds, function (err, hash) {
                const insertUsers = `INSERT INTO users (email, password) VALUES ('foo@bar.com', '${hash}');`;
                db.run(insertUsers);
            });
            const insertItems = `INSERT INTO items (name, price) VALUES ('book', 12.99), ('t-shirt', 15.99), ('milk', 3.99);`;
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
        });
    }
    static get(stmt, params) {
        return new Promise((res, rej) => {
            db.get(stmt, params, (error, result) => {
                if (error) {
                    return rej(error.message);
                }
                return res(result);
            });
        });
    }
    static run(stmt, params) {
        return new Promise((res, rej) => {
            db.run(stmt, params, (error, result) => {
                if (error) {
                    return rej(error.message);
                }
                return res(result);
            });
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcmVwb3NpdG9yaWVzL2Rhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBaUM7QUFDakMsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ2pDLE1BQU0sRUFBRSxHQUFHLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2xELCtDQUFpQztBQUNqQyxNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFFdEI7SUFFSSxNQUFNLENBQUMsYUFBYTtRQUNoQixFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1QsaUJBQWlCO1lBQ2pCLE1BQU0sY0FBYyxHQUFHLDRCQUE0QixDQUFDO1lBQ3BELEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDdkIsTUFBTSxjQUFjLEdBQUcsNEJBQTRCLENBQUM7WUFDcEQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUV2QixpQkFBaUI7WUFDakIsTUFBTSxnQkFBZ0IsR0FBRyxtR0FBbUcsQ0FBQztZQUM3SCxFQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDekIsTUFBTSxnQkFBZ0IsR0FBRyxtR0FBbUcsQ0FBQztZQUM3SCxFQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDekIsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFBO1lBRXBCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxVQUFVLEdBQUcsRUFBRSxJQUFJO2dCQUNqRCxNQUFNLFdBQVcsR0FBRywrREFBK0QsSUFBSSxLQUFLLENBQUE7Z0JBQzVGLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLFdBQVcsR0FBRyw2RkFBNkYsQ0FBQTtZQUNqSCxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU07UUFDbkIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUM1QixFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ25DLElBQUksS0FBSyxFQUFFO29CQUNQLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDN0I7Z0JBQ0QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRCxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNO1FBQ25CLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDNUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUNuQyxJQUFJLEtBQUssRUFBRTtvQkFDUCxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzdCO2dCQUNELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTTtRQUNuQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzVCLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDbkMsSUFBSSxLQUFLLEVBQUU7b0JBQ1AsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUM3QjtnQkFDRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUdKO0FBM0RELDRCQTJEQyJ9