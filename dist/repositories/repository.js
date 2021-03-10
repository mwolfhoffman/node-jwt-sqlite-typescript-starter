"use strict";
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
const saltRounds = 10;
class default_1 {
    static getAllItems() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield dao_1.default.all("SELECT * FROM items", []);
        });
    }
    static getItemById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield dao_1.default.get("SELECT * FROM items WHERE id = ?", [id]);
        });
    }
    static getUserByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return dao_1.default.get("SELECT * FROM users WHERE username =?", [username]);
        });
    }
    static getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return dao_1.default.get('SELECT * FROM users WHERE id = ?', [id]);
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3JlcG9zaXRvcmllcy9yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQXdCO0FBRXhCLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUV0QjtJQUVJLE1BQU0sQ0FBTyxXQUFXOztZQUNwQixPQUFPLE1BQU0sYUFBRyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUNuRCxDQUFDO0tBQUE7SUFFRCxNQUFNLENBQU8sV0FBVyxDQUFDLEVBQUU7O1lBQ3ZCLE9BQU8sTUFBTSxhQUFHLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNsRSxDQUFDO0tBQUE7SUFFRCxNQUFNLENBQU8saUJBQWlCLENBQUMsUUFBUTs7WUFDbkMsT0FBTyxhQUFHLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN4RSxDQUFDO0tBQUE7SUFFRCxNQUFNLENBQU8sV0FBVyxDQUFDLEVBQUU7O1lBQ3ZCLE9BQU8sYUFBRyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0QsQ0FBQztLQUFBO0NBQ0o7QUFqQkQsNEJBaUJDIn0=