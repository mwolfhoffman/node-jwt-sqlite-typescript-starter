"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class User {
    constructor(email, password, id = null) {
        this.email = email;
        this.password = password;
        this.id = id || uuid_1.v4();
    }
}
exports.default = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVscy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQW9DO0FBRXBDLE1BQXFCLElBQUk7SUFLckIsWUFBWSxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUUsR0FBRyxJQUFJO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLFNBQU0sRUFBRSxDQUFDO0lBQzdCLENBQUM7Q0FFSjtBQVhELHVCQVdDIn0=