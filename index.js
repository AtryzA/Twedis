const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const Twitter = require('twitter');

const keys = require('./secret');

const client = new Twitter ({
    consumer_key: keys.consumer_key,
    consumer_secret: keys.consumer_secret,
    access_token_key: keys.access_token_key,
    access_token_secret: keys.access_token_secret,
});

const getTweet = (user_name) => {
    const params = {screen_name: user_name}
    client.get('statuses/user_timeline', params, (error, tweets, response) => {
    if (!error) {
        console.log(tweets);
    }
})}

app.get('/', (req, res) => {
    const user_name = req.body.user_name;
    res.send(getTweet(user_name));
})

app.listen(3000);
