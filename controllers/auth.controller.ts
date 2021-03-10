import njwt from 'njwt';
import repository from '../repositories/repository';
import * as  bcrypt from 'bcrypt';
import { Request, Response } from 'express'
import User from '../models/user';


const {
  APP_SECRET = 'secret' } = process.env;

const encodeToken = (tokenData) => {
  const token = njwt.create(tokenData, APP_SECRET)
  token.setExpiration(new Date().getTime() + (60 * 60 * 1000 * 24 * 7)); // One week from now
  return token.compact()
}

const decodeToken = (token) => {
  return njwt.verify(token, APP_SECRET);
}

export const authMiddleware = async (req: Request, res: Response, next: Function) => {
  const token = req.header('Access-Token');
  if (!token) {
    return next();
  }

  try {
    const decoded = decodeToken(token);
    const { userId } = decoded.body;
    const user: User = <User>await repository.getUserById(userId)
    if (user) {
      req.body.userId = userId;
    }
  } catch (e) {
    return next();
  }
  next();
};

export const authenticated = (req, res, next) => {
  if (req.body.userId) {
    return next();
  }

  res.status(401);
  res.json({ error: 'User not authenticated' });
}

const returnInvalidCredentials = (res) => {
  res.status(401);
  return res.json({ error: 'Invalid username or password' });

}

export const login = async (req, res) => {
  const { email, password } = req.body;


  const user = <User>await repository.getUserByEmail(email)

  if (!user) {
    returnInvalidCredentials(res)
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      const accessToken = encodeToken({ userId: user.id });
      return res.json({ accessToken });
    } else {
      return returnInvalidCredentials(res);
    }
  });
}