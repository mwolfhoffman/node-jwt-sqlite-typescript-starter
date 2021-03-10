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
exports.login = exports.authenticated = exports.authMiddleware = void 0;
const njwt_1 = __importDefault(require("njwt"));
const repository_1 = __importDefault(require("../repositories/repository"));
const bcrypt = __importStar(require("bcrypt"));
const { APP_SECRET = 'secret' } = process.env;
const encodeToken = (tokenData) => {
    return njwt_1.default.create(tokenData, APP_SECRET).compact();
};
const decodeToken = (token) => {
    return njwt_1.default.verify(token, APP_SECRET).setExpiration(new Date().getTime() + 604800000).body; //1 week
};
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.header('Access-Token');
    if (!token) {
        return next();
    }
    try {
        const decoded = decodeToken(token);
        const { userId } = decoded;
        const user = yield repository_1.default.getUserById(userId);
        if (user) {
            req.body.userId = userId;
        }
    }
    catch (e) {
        return next();
    }
    next();
});
exports.authMiddleware = authMiddleware;
const authenticated = (req, res, next) => {
    if (req.userId) {
        return next();
    }
    res.status(401);
    res.json({ error: 'User not authenticated' });
};
exports.authenticated = authenticated;
const returnInvalidCredentials = (res) => {
    res.status(401);
    return res.json({ error: 'Invalid username or password' });
};
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield repository_1.default.getUserByUsername(username);
    if (!user) {
        returnInvalidCredentials(res);
    }
    bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
            const accessToken = encodeToken({ userId: user.id });
            return res.json({ accessToken });
        }
        else {
            return returnInvalidCredentials(res);
        }
    });
});
exports.login = login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlcnMvYXV0aC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBd0I7QUFDeEIsNEVBQW9EO0FBQ3BELCtDQUFrQztBQUtsQyxNQUFNLEVBQ0osVUFBVSxHQUFHLFFBQVEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7QUFFeEMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxTQUFTLEVBQUUsRUFBRTtJQUNoQyxPQUFPLGNBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3RELENBQUMsQ0FBQTtBQUVELE1BQU0sV0FBVyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDNUIsT0FBTyxjQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRO0FBQ3RHLENBQUMsQ0FBQTtBQUVNLE1BQU0sY0FBYyxHQUFHLENBQU8sR0FBVyxFQUFFLEdBQVksRUFBRSxJQUFhLEVBQUUsRUFBRTtJQUMvRSxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3pDLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixPQUFPLElBQUksRUFBRSxDQUFDO0tBQ2Y7SUFFRCxJQUFJO1FBQ0YsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDM0IsTUFBTSxJQUFJLEdBQWEsTUFBTSxvQkFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUMzRCxJQUFJLElBQUksRUFBRTtZQUNSLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUMxQjtLQUNGO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixPQUFPLElBQUksRUFBRSxDQUFDO0tBQ2Y7SUFDRCxJQUFJLEVBQUUsQ0FBQztBQUNULENBQUMsQ0FBQSxDQUFDO0FBakJXLFFBQUEsY0FBYyxrQkFpQnpCO0FBRUssTUFBTSxhQUFhLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO0lBQzlDLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtRQUNkLE9BQU8sSUFBSSxFQUFFLENBQUM7S0FDZjtJQUVELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSx3QkFBd0IsRUFBRSxDQUFDLENBQUM7QUFDaEQsQ0FBQyxDQUFBO0FBUFksUUFBQSxhQUFhLGlCQU96QjtBQUVELE1BQU0sd0JBQXdCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUN2QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSw4QkFBOEIsRUFBRSxDQUFDLENBQUM7QUFFN0QsQ0FBQyxDQUFBO0FBRU0sTUFBTSxLQUFLLEdBQUcsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDdEMsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBR3hDLE1BQU0sSUFBSSxHQUFTLE1BQU0sb0JBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUUvRCxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1Qsd0JBQXdCLENBQUMsR0FBRyxDQUFDLENBQUE7S0FDOUI7SUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ3RELElBQUksTUFBTSxFQUFFO1lBQ1YsTUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3JELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNMLE9BQU8sd0JBQXdCLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQSxDQUFBO0FBbEJZLFFBQUEsS0FBSyxTQWtCakIifQ==