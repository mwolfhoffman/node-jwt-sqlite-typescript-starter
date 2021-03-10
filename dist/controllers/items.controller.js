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
const item_repository_1 = __importDefault(require("../repositories/item.repository"));
class default_1 {
    static getAllItems(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let items = yield item_repository_1.default.getAllItems();
            return res.send({ items });
        });
    }
    ;
    static getItemById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let item = yield item_repository_1.default.getItemById(req.params.id);
            return res.send({ item });
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbnRyb2xsZXJzL2l0ZW1zLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRkFBbUQ7QUFFbkQ7SUFDSSxNQUFNLENBQU8sV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHOztZQUM3QixJQUFJLEtBQUssR0FBRyxNQUFNLHlCQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUMvQixDQUFDO0tBQUE7SUFBQSxDQUFDO0lBRUYsTUFBTSxDQUFPLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRzs7WUFDN0IsSUFBSSxJQUFJLEdBQUcsTUFBTSx5QkFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ2hELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDOUIsQ0FBQztLQUFBO0NBRUo7QUFYRCw0QkFXQyJ9