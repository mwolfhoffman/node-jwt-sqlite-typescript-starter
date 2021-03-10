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
exports.signup = exports.login = exports.authenticated = exports.authMiddleware = void 0;
const njwt_1 = __importDefault(require("njwt"));
const user_repository_1 = __importDefault(require("../repositories/user.repository"));
const bcrypt = __importStar(require("bcrypt"));
const APP_SECRET = process.env.APP_SECRET;
const encodeToken = (tokenData) => {
    const token = njwt_1.default.create(tokenData, APP_SECRET);
    token.setExpiration(new Date().getTime() + (60 * 60 * 1000 * 24 * 7)); // One week from now
    return token.compact();
};
const decodeToken = (token) => {
    return njwt_1.default.verify(token, APP_SECRET);
};
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.header('Access-Token');
    if (!token) {
        return next();
    }
    try {
        const decoded = decodeToken(token);
        const { userId } = decoded.body;
        const user = yield user_repository_1.default.getUserById(userId);
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
    if (req.body.userId) {
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
    const { email, password } = req.body;
    const user = yield user_repository_1.default.getUserByEmail(email);
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
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const created = yield user_repository_1.default.createUser(user);
    if (created) {
        return res.send("Success! You have successfully signed up. Please login to continue.");
    }
    else {
        const error = new Error("Oh no! There was an error signing up. Please try again.");
        return res.status(500).send({ error: error.message });
    }
});
exports.signup = signup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlcnMvYXV0aC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBd0I7QUFDeEIsc0ZBQW1EO0FBQ25ELCtDQUFrQztBQUlsQyxNQUFNLFVBQVUsR0FBbUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7QUFFMUQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxTQUFTLEVBQUUsRUFBRTtJQUNoQyxNQUFNLEtBQUssR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQTtJQUNoRCxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjtJQUMzRixPQUFPLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQTtBQUN4QixDQUFDLENBQUE7QUFFRCxNQUFNLFdBQVcsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFO0lBQzVCLE9BQU8sY0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFBO0FBRU0sTUFBTSxjQUFjLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWMsRUFBRSxFQUFFO0lBQ2xGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDekMsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNWLE9BQU8sSUFBSSxFQUFFLENBQUM7S0FDZjtJQUVELElBQUk7UUFDRixNQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsTUFB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