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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dao_1 = __importDefault(require("./dao"));
const bcrypt = __importStar(require("bcrypt"));
const saltRounds = 10;
class default_1 {
    static getAllItems() {
        return __awaiter(this, void 0, void 0, function* () {
            const items = yield dao_1.default.all("SELECT * FROM items", []);
            return items;
        });
    }
    static getItemById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield dao_1.default.get("SELECT * FROM items WHERE id = ?", [id]);
            return item;
        });
    }
    static getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield dao_1.default.get("SELECT * FROM users WHERE email =?", [email]);
            return user;
        });
    }
    static getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield dao_1.default.get('SELECT * FROM users WHERE id = ?', [id]);
            return user;
        });
    }
    static createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield bcrypt.hash(user.password, saltRounds, function (err, hash) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        return false;
                    }
                    const insertUsers = `INSERT INTO users (email, password) VALUES (?,?);`;
                    try {
                        yield dao_1.default.run(insertUsers, [user.email, hash]);
                        return true;
                    }
                    catch (ex) {
                        console.error(ex);
                        return false;
                    }
                });
            });
            return true;
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcmVwb3NpdG9yaWVzL3VzZXIucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBd0I7QUFDeEIsK0NBQWlDO0FBR2pDLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUV0QjtJQUVJLE1BQU0sQ0FBTyxXQUFXOztZQUNwQixNQUFNLEtBQUssR0FBRyxNQUFNLGFBQUcsQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDdEQsT0FBZSxLQUFLLENBQUE7UUFDeEIsQ0FBQztLQUFBO0lBRUQsTUFBTSxDQUFPLFdBQVcsQ0FBQyxFQUFVOztZQUMvQixNQUFNLElBQUksR0FBRyxNQUFNLGFBQUcsQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ3BFLE9BQWEsSUFBSSxDQUFDO1FBQ3RCLENBQUM7S0FBQTtJQUVELE1BQU0sQ0FBTyxjQUFjLENBQUMsS0FBYTs7WUFDckMsTUFBTSxJQUFJLEdBQUcsTUFBTSxhQUFHLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMxRSxPQUFhLElBQUksQ0FBQztRQUN0QixDQUFDO0tBQUE7SUFFRCxNQUFNLENBQU8sV0FBVyxDQUFDLEVBQVU7O1lBQy9CLE1BQU0sSUFBSSxHQUFHLE1BQU0sYUFBRyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckUsT0FBYSxJQUFJLENBQUM7UUFDdEIsQ0FBQztLQUFBO0lBRUQsTUFBTSxDQUFPLFVBQVUsQ0FBQyxJQUFVOztZQUM5QixNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsVUFBZ0IsR0FBRyxFQUFFLElBQUk7O29CQUNsRSxJQUFJLEdBQUcsRUFBRTt3QkFDTCxPQUFPLEtBQUssQ0FBQztxQkFDaEI7b0JBQ0QsTUFBTSxXQUFXLEdBQUcsbURBQW1ELENBQUE7b0JBQ3ZFLElBQUk7d0JBQ0EsTUFBTSxhQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDL0MsT0FBTyxJQUFJLENBQUM7cUJBQ2Y7b0JBQUMsT0FBTyxFQUFFLEVBQUU7d0JBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTt3QkFDakIsT0FBTyxLQUFLLENBQUM7cUJBQ2hCO2dCQUNMLENBQUM7YUFBQSxDQUFDLENBQUM7WUFDSCxPQUFPLElBQUksQ0FBQTtRQUNmLENBQUM7S0FBQTtDQUNKO0FBdENELDRCQXNDQyJ9