import njwt from 'njwt';
import repo from '../repositories/user.repository';
import * as  bcrypt from 'bcrypt';
import { Request, Response } from 'express'
import User from '../models/user';

const APP_SECRET: string = <string>process.env.APP_SECRET;

const encodeToken = (tokenData) => {
  console.log(APP_SECRET)
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
    const user: User = <User>await repo.getUserById(userId)
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


  const user = <User>await repo.getUserByEmail(email)

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

export const signup = async (req: Request, res: Response) => {
  const user: User = req.body;
  const created: boolean = await repo.createUser(user)

  if (created) {
    return res.send("Success! You have successfully signed up. Please login to continue.");
  } else {
    const error: Error = new Error("Oh no! There was an error signing up. Please try again.");
    return res.status(500).send({ error: error.message });
  }
}