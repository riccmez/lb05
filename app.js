const express = require('express');
const app = express();

const engine = require('ejs-mate');
const path = require('path');
const http = require('http');
const config = require('./config.js');
const db = require('./db');
const server = http.Server(app);

// settings
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// routes
app.use(require('./routes/index'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
const PORT = config.PORT;
const HOST = config.HOST;
server.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`)