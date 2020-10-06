const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

const Twitter = require('twitter');

const keys = require('./secret');

module.exports = new Twitter({
    consumer_key        : keys.consumer_key,
    consumer_secret     : keys.consumer_secret,
    access_token_key    : keys.access_token_key,
    access_token_secret : keys.access_token_secret,
});

const router = require('./src/router');

app.use('/api/service', router);

app.listen(3000);
