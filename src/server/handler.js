const repository = require('./repository');

module.exports = class handler {
    static getTimeline(req, res) {
        repository.getTimeline(req).then((data) => {
            res.send(data);
        }).catch((error) => {
            console.log(error);
            res.send(error);
        });
    }

    static getProfile(req, res) {
        repository.getProfile(req).then((data) => {
            res.send(data);
        }).catch((error) => {
            console.log(error);
            res.send(error);
        });
    }

    static getFollowsByUserID(req, res) {
        repository.getFollowsByUserID(req).then((friends) => {
            res.send(friends);
        }).catch((error) => {
            console.log(error);
            res.send(error);
        });
    }

    static getFollowersByUserID(req, res) {
        repository.getFollowersByUserID(req).then((follower) => {
            res.send(follower);
        }).catch((error) => {
            console.log(error);
            res.send(error);
        });
    }

    static getTweetsByUserID(req, res) {
        repository.getTweetsByUserID(req).then((tweets) => {
            res.send(tweets);
        }).catch((error) => {
            console.log(error);
            res.send(error);
        });
    }

    static searchTweets(req, res) {
        repository.searchTweets(req).then((results) => {
            res.send(results);
        }).catch((error) => {
            console.log(error);
            res.send(error);
        });
    }
};