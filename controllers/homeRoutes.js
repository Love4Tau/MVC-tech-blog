const express = require("express");
const router = express.Router();

const homeRoutes = new router();

homeRoutes.get("/", async (req, res) => {
    res.render("homePage");
})


module.exports = homeRoutes;