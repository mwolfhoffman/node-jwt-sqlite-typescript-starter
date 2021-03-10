"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dao_1 = __importDefault(require("./repositories/dao"));
const auth_controller_1 = require("./controllers/auth.controller");
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const items_routes_1 = __importDefault(require("./routes/items.routes"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerSpec = swagger_jsdoc_1.default({ explorer: true });
const port = 3000;
exports.app = express_1.default();
exports.app.listen(port, () => console.log(`Authentication example app listening on port ${port}!`));
exports.app.use(body_parser_1.default.json());
exports.app.use(auth_controller_1.authMiddleware);
exports.app.use('/swagger', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
//  Drop/Create DB Tables:
dao_1.default.setupDbForDev();
exports.app.use('/api/auth', auth_routes_1.default);
exports.app.use('/api/items', auth_controller_1.authenticated, items_routes_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsOERBQXFDO0FBQ3JDLDZEQUFxQztBQUNyQyxtRUFBOEU7QUFDOUUsdUVBQThDO0FBQzlDLHlFQUFnRDtBQUVoRCw0RUFBMkM7QUFDM0Msa0VBQXlDO0FBQ3pDLE1BQU0sV0FBVyxHQUFHLHVCQUFZLENBQUMsRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztBQUdsRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7QUFDTCxRQUFBLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7QUFFN0IsV0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzdGLFdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzNCLFdBQUcsQ0FBQyxHQUFHLENBQUMsZ0NBQWMsQ0FBQyxDQUFDO0FBQ3hCLFdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLDRCQUFTLENBQUMsS0FBSyxFQUFFLDRCQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFFbkUsMEJBQTBCO0FBQzFCLGFBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUVwQixXQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxxQkFBVSxDQUFDLENBQUM7QUFDakMsV0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsK0JBQWEsRUFBRSxzQkFBVyxDQUFDLENBQUMifQ==