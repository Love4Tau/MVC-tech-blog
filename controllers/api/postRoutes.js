const express = require("express");
const router = express.Router();
const { Comment, Post, User } = require("../../models");

//Get all posts with username
router.get("/", (req, res) => {
    Post.findAll({ include: [
        { 
            model: User, 
            attributes: ["username"]
        }
    ]
    })
    .then(postData => {
        res.status(200).json(postData);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

//Get individual post by id
router.get("/:id", (req, res) => {
    Post.findByPk(req.params.id, {include: [
        {
            model: user,
            attributes: ["username"],
        },

        {
            model: comment,
            include: [
                {
                    model: user,
                    attributes: ["username"],
                },
            ],
        },
    ],
})
.then(postData => {
    if(!postData) {
        res.status(404). render("No Post Found");
        return;
    }
    res.status(200).json(postData);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;

