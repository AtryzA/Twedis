const handler = require('./handler');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    handler.getTweet(req);
});

module.exports = router;