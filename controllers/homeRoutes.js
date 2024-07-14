const express = require("express");
const router = express.Router();

const homeRoutes = new router();

homeRoutes.get("/", (req, res) => {
    res.json(message, "homePage");
})


module.exports = homeRoutes;