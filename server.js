const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 80;

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

//Session requirements
const sess = {
    secret: 'secret-password',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
app.use((req, res, next) => { res.locals = { ...res.locals, ...req.session }; next(); });

app.get('/music', (req, res) => {
    res.render('music');
});

app.get('/television', (req, res) => {
    res.render('television');
});

app.get('/video-games', (req, res) => {
    res.render('videogames');
});

app.get('/post', (req, res) => {
    res.render('post');
});

app.use(require('./controllers'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`))
});