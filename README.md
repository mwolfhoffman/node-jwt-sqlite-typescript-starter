# Node-JWT-Sqlite-TypeScript-Starter

This is an updated version of my older repo that was written using vanilla JS. I use TypeScript now for my APIs so this repo includes TS.

This is a fast, simple, and lightweight starter for node.js REST APIs. It uses `sqlite3` for data storage and `njwt` and `bcrypt` for safe authentication. 

This project is meant to be a template for quickly spinning up MVPs for side projects, and should not be used in production without modification.  

<br />

<br />


# Get Started

With npm:

```
npm install
npm run start
```


<br/>

# Features

## Data Persistence

This template uses `sqlite3` in memory and is meant to be used for small MVPs for dev purposes. The data layer can easily be changed to use postgres, ms sql server, mysql, etc as needed. 

There is a default script `setupDbForDev` in the `dao.js` file that will run to create tables, insert values, etc. 

The `items.controller.js` is here to provide an example controller that will interact with the `repository` and `dao`. 

## Authentication

The `auth.controller.js` will use the 'users' table created in the `dao.js` by default. `bcrpyt` is used to hash password and `njwt` is used to create, decode, and encode JSON Web Tokens.

To authenticate make a PUT request to `/api/auth/login`. 

The request body should be:

```
{
    "email":"foo@bar.com",
    "password":"123"

}
```

You will receive an access_token response.  This is to be sent as your "Access-Token" header. 
