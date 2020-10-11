const handler = require('./handler');
const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
    const user_name = req.body;
    handler.getProfileByUserID(user_name, res);
});

router.get('/tweet', (req, res) => {
    const user_name = req.body;
    handler.getTweetByUserID(user_name, res);
});

router.get('/follow', (req, res) => {
    const user_name = req.body;
    handler.getFollowByUserID(user_name, res);
});

router.get('/follower', (req, res) => {
    const user_name = req.body;
    handler.getFollowerByUserID(user_name, res);
});

module.exports = router;