
// Dependencies 
// Initializing Sequelize with store
const path = require('path');
const express = require('express');
const sequelize = require("./config/connection");
const expresshbs = require("express-handlebars");
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');

const app = express;
const port = process.env.port || 3001;

app.use(session(sess));

// connecting/setting up session to sequelize
const session = {
    secret: 'Extremely secret',
    cookie: {
      maxAge: 10 * 30000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    // Session store
    store: new SequelizeStore({
      database: sequelize
    })
  };

// app.use(session(sess));


// Setting up the middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Setting up handlebars
const hbs = expresshbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes, "/");

// registering routes separately
require('./controllers/homeRoutes')(app);
require('./controllers/api/commentedRoutes')(app);
require('./controllers/api/postRoutes')(app);
require('./controllers/api/userRoutes')(app);

sequelize.sync({force: false}).then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
  });
});