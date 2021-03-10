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
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcmVwb3NpdG9yaWVzL2l0ZW0ucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUF3QjtBQUd4QjtJQUVJLE1BQU0sQ0FBTyxXQUFXOztZQUNwQixNQUFNLEtBQUssR0FBRyxNQUFNLGFBQUcsQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDdEQsT0FBZSxLQUFLLENBQUE7UUFDeEIsQ0FBQztLQUFBO0lBRUQsTUFBTSxDQUFPLFdBQVcsQ0FBQyxFQUFVOztZQUMvQixNQUFNLElBQUksR0FBRyxNQUFNLGFBQUcsQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ3BFLE9BQWEsSUFBSSxDQUFDO1FBQ3RCLENBQUM7S0FBQTtDQUNKO0FBWEQsNEJBV0MifQ==