const Twitter = require('twitter');
const keys = require('./secret');

module.exports = new Twitter({
    consumer_key        : keys.consumer_key,
    consumer_secret     : keys.consumer_secret,
    access_token_key    : keys.access_token_key,
    access_token_secret : keys.access_token_secret,
});