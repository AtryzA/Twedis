const handler = require('./handler');
const express = require('express');
const router = express.Router();

router.get('/timeline', (req, res) => {
    const params = req.body;
    handler.getTimeline(params, res);
});

router.get('/user', (req, res) => {
    const params = req.body;
    handler.getProfile(params, res);
});

router.get('/follows', (req, res) => {
    const params = req.body;
    handler.getFollowsByUserID(params, res);
});

router.get('/followers', (req, res) => {
    const params = req.body;
    handler.getFollowersByUserID(params, res);
});

router.get('/tweets', (req, res) => {
    const params = req.body;
    handler.getTweetsByUserID(params, res);
});

router.get('/tweets/search', (req, res) => {
    const params = req.body;
    handler.searchTweets(params, res);
});

module.exports = router;