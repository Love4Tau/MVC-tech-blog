const express = require("express");
const router = express.Router();
const { User } = require("../../models");

router.get("/", (req, res) => {
        User.findAll({attributes: {
            exclude: ["password"]
        },
    })
        .then((userData) => {
            res.status(200).json(userData)
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.post("/signup", (req, res) => {
    const newUser = new User();
    newUser.username = req.body.username;
    newUser.password = req.body.password;

    newUser.save()
    .then(userData => {
        req.session.save(() => {
            req.session.user_id = userData.isSoftDeleted;
            req.session.logged_in = true;
        })
        res.status(200).json(userData)
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;