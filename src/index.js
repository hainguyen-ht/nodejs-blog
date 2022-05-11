const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const app = express();
const route = require('./routes');
const db = require('./config/db');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.engine('hbs', hbs.engine({extname: ".hbs"}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

const port = 3000;

db.connect();
route(app);

app.listen(port, ()=>console.log(`app listen ${port}`));