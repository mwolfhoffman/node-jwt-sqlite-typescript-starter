# Node-JWT-Sqlite-TypeScript-Starter


[![React-App-CI](https://github.com/mwolfhoffman/node-jwt-sqlite-typescript-starter/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/mwolfhoffman/node-jwt-sqlite-typescript-starter/actions/workflows/node.js.yml)

This is an updated version of my older <a taret="_blank" href="https://github.com/mwolfhoffman/node-jwt-sqlite-starter">node-jwt-sqlite starter</a> repo that was written using vanilla JS. I just about always use TypeScript now for my node APIs so this repo includes TS and a few new features.

This is a fast, simple, and lightweight starter for node.js REST APIs. It uses `sqlite3` for data storage and `njwt` and `bcrypt` for safe authentication with hashed passwords and JWT. 

**This project is meant to be a template for quickly spinning up MVPs for side projects, and should not be used in production without modification.**

<br />

<br />


# Get Started

## Required Environment Variables:
```
APP_SECRET=
```

## Install and Run:

With npm:

```
npm install
npm run start
```

With yarn:

```
yarn install
yarn start
```



<br/>

# Features

## TypeScript Watcher

This version includes a TS watcher when running the `dev` command that will pick up changes automatically. Use `npm run dev` or `yarn dev` to take advantage of this feature.

## Data Persistence

This template uses `sqlite3` in memory and is meant to be used for small MVPs for dev purposes. The data layer can easily be changed to use postgres, ms sql server, mysql, etc as needed. 

There is a default script `setupDbForDev` in the `dao.ts` file that will run to create tables, insert values, etc. Please note, I have a `DROP TABLE IF EXISTS` statement that will run automatically at runtime.

The `items.controller.ts` is here to provide an example controller that will interact with the `repository` and `dao`. It requires valid authentication to use to demonstrated how to protect routes in this project.

## Authentication

The `auth.controller.ts` will use the 'users' table created in the `dao.ts` by default. `bcrpyt` is used to hash password and `njwt` is used to create, decode, and encode JSON Web Tokens. JWTs by default are valid for one week. This can be changed in the `auth.controller.ts`. 

To authenticate make a PUT request to `/api/auth/login`. 

The request body should be:

```
{
    "email":"foo@bar.com",
    "password":"123"

}
```

You will receive an access_token response.  This is to be sent as your "Access-Token" header. 

## Signup

I also added a sign up route to this project (which did not exist in the vanilla JS version). A request body with an email and password to the `/api/auth/signup` will create a new user. Upon successful response, a user can make a `GET` request with the same body to the `/api/auth/login` endpoint to receieve and `access-token`.

## Unit Tests

I added unit tests to this TS version of the starter as well. These tests use `jest` and there are sample tests in the `/tests/` directory.
