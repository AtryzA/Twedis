const client = require('../index');

module.exports = class repository {
    static getTweet(user_name) {
        const params = {screen_name: user_name};
        client.get('statuses/user_timeline', params, (error, tweets, response) => {
        if (error) {
            console.log(error);
            return null;
        }
        for (const tweet of tweets) {
            console.log(tweet.text);
        }
    });}
};