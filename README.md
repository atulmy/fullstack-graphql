![logos](http://atulmy.com/atulmy.com/attachments/images/dev-logos.png)

# Fullstack GraphQL

Simple Demo Application

**API** build with Node + Express + GraphQL + Sequelize (supports MySQL, Postgres, Sqlite and MSSQL). 

**WebApp** build with React + Redux. 

Writtten in ES6 using Babel + Webpack.

## 📝 Features
- [x] List thoughts
- [x] Add thought
- [x] Delete thought

## ▶️ Running
- Clone repo `git clone git@github.com:atulmy/fullstack-graphql.git fullstack-graphql`
- Install NPM modules API `cd api` and `npm install`
- Install NPM modules Webapp `cd webapp` and `npm install`
- Modify `/api/src/config/database.json` for database credentials
- Modify `/api/src/config/config.json` for API port (optional)
- Modify `/webapp/.env` for webapp port (optional)
- Run API `cd api` and `npm start`, browse GraphiQL at http://localhost:3000/
- Run Webapp `cd webapp` and `npm start`, browse webapp at http://localhost:8000/

### Sample API logs
```
[nodemon] starting `babel-node src/index.js --presets es2015,stage-2`
SETUP - Connecting database...
SETUP - Loading modules...
SETUP - GraphQL...
SETUP - Syncing database tables...
INFO - Database connected.
INFO - Database sync complete.
SETUP - Starting server...
INFO - Server started on port 3000.
```

## 📸 Screenshots
![screenshot](http://atulmy.com/atulmy.com/attachments/images/fullstack-graphql.gif)

## 🎩 Author
Atul Yadav - [GitHub](https://github.com/atulmy) &bull; [Twitter](https://twitter.com/atulmy)

## 📜 License
Copyright (c) 2017 Atul Yadav http://github.com/atulmy

The MIT License (http://www.opensource.org/licenses/mit-license.php)
