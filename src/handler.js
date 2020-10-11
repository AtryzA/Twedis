const repository = require('./repository');

module.exports = class handler {
    static getProfileByUserID(req, res) {
        const user_name = req.user_name;
        repository.getProfileByUserID(user_name).then((data) => {
            res.send(data);
        }).catch((error) => {
            console.log(error);
            res.send(error);
        });
    }

    static getTweetByUserID(req, res) {
        const user_name = req.user_name;
        repository.getTweetByUserID(user_name).then((tweets) => {
            res.send(tweets);
        }).catch((error) => {
            console.log(error);
            res.send(error);
        });
    }

    static getFollowByUserID(req, res) {
        const user_name = req.user_name;
        repository.getFollowByUserID(user_name).then((friends) => {
            res.send(friends);
        }).catch((error) => {
            console.log(error);
            res.send(error);
        });
    }

    static getFollowerByUserID(req, res) {
        const user_name = req.user_name;
        repository.getFollowerByUserID(user_name).then((follower) => {
            res.send(follower);
        }).catch((error) => {
            console.log(error);
            res.send(error);
        });
    }
};