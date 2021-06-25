# News project 

Tech stack: React, GraphQL, Scrapy, MongoDB

Database: MongoDB

###
This project can crawl news from another website (ex: vnexpress.vn,…) and save to database, then display news using React ( User can search or filter news).


### Run application seperately 
Crawler:
You must install anaconda3, then install scrapy.
```sh
$ cd crawler/crawler
$ scrapy crawl thethaos
```

Client-side

```sh
$ cd frontend
$ npm install 
$ npm start
```

Server-side

```sh
$ cd server
$ npm install 
$ npm start
```

### Test it

When everything is done, go to http://localhost:3000 in browser to see website.

