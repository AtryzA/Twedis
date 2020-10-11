const client = require('./client');

module.exports = class repository {
    static getProfileByUserID(user_name) {
        const params = {screen_name: user_name};
        return new Promise((resolve, reject) => {
            client.get('users/show', params, (error, data) => {
                if (error) {
                    reject(error);
                }
                const fixedProfile = {
                    'name': data.name,
                    'screen_name': data.screen_name,
                    'protected': data.protected,
                    'location': data.location,
                    'description': data.description,
                    'url': data.url,
                    'followers_count': data.followers_count,
                    'friends_count': data.friends_count,
                    'created_at': data.created_at,
                    'favourites_count': data.favourites_count,
                    'statuses_count': data.statuses_count,
                    'profile_image_url': data.profile_image_url
                };
                resolve(fixedProfile);
            });
        });
    }

    static getTweetByUserID(user_name) {
        const params = {screen_name: user_name};
        return new Promise((resolve, reject) => {
            client.get('statuses/user_timeline', params, (error, tweets) => {
                if (error) {
                    reject(error);
                }
                const fixedTweet = [];
                for(const tweet of tweets) {
                    fixedTweet.push({
                        'tweet' : tweet.retweeted_status? null : tweet.text,
                        'created_at': tweet.created_at,
                        'in_reply_to_screen_name': tweet.in_reply_to_screen_name,
                        'retweeted_status_created_at': tweet.retweeted_status? tweet.retweeted_status.created_at : null,
                        'retweeted_status_tweet': tweet.retweeted_status? tweet.retweeted_status.text : null,
                        'retweet_count': tweet.retweeted_status? tweet.retweeted_status.retweet_count : tweet.retweet_count,
                        'favorite_count': tweet.retweeted_status? tweet.retweeted_status.favorite_count : tweet.favorite_count
                    });
                }
                resolve(fixedTweet);
            });
        });
    }

    static getFollowByUserID(user_name) {
        const params = {screen_name: user_name, cursor: -1};
        return new Promise((resolve, reject) => {
            client.get('friends/list', params, (error, friends) => {
                if (error) {
                    reject(error);
                }
                const fixedFollow = [];
                for(const friend of friends.users) {
                    fixedFollow.push({
                        'name': friend.name,
                        'screen_name': friend.screen_name,
                        'protected': friend.protected,
                        'location': friend.location,
                        'description': friend.description,
                        'url': friend.url,
                        'followers_count': friend.followers_count,
                        'friends_count': friend.friends_count,
                        'created_at': friend.created_at,
                        'favourites_count': friend.favourites_count,
                        'statuses_count': friend.statuses_count,
                        'profile_image_url': friend.profile_image_url
                    });
                }
                resolve(fixedFollow);
            });
        });
    }

    static getFollowerByUserID(user_name) {
        const params = {screen_name: user_name, cursor: -1};
        return new Promise((resolve, reject) => {
            client.get('followers/list', params, (error, followers) => {
                if (error) {
                    reject(error);
                }
                const fixedFollower = [];
                for(const follower of followers.users) {
                    fixedFollower.push({
                        'name': follower.name,
                        'screen_name': follower.screen_name,
                        'protected': follower.protected,
                        'location': follower.location,
                        'description': follower.description,
                        'url': follower.url,
                        'followers_count': follower.followers_count,
                        'friends_count': follower.friends_count,
                        'created_at': follower.created_at,
                        'favourites_count': follower.favourites_count,
                        'statuses_count': follower.statuses_count,
                        'profile_image_url': follower.profile_image_url
                    });
                }
                resolve(fixedFollower);
            });
        });
    }
};