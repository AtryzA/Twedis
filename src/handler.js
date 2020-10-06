const repository = require('./repository');

module.exports = class handler {
    static getTweet(req, res) {
        const user_name = req.body.user_name;
        repository.getTweet(user_name);
    }
};