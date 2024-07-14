const express = require("express");
const router = express.Router();
const { Comment } = require("../../models");

router.post("/", (req, res) => {
    Comment.create({
        ...req.body,
        user_id: req.session.user_id,
    })
    .then(newComment => {
        res.status(200).json(newComment);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;