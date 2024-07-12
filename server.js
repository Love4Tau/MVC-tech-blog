const express = require("express");
const path = require("path");
const session = require("express-session");
const Sequelize = require("sequelize");
const connection = require("./config/connection");
const routes = require("./controllers");
const sequelize = require("sequelize");
const app = express();
const PORT = process.env.PORT || 8080;

const sess = {
    secret: "Super secret secret",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}

app.use(session(sess));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`))
})