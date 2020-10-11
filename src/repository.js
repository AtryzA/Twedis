const client = require('./client');

module.exports = class repository {
    static getTimeline(params) {
        return new Promise((resolve, reject) => {
            client.get('statuses/home_timeline', params, (error, tweets) => {
                if (error) {
                    reject(error);
                }
                const fixedTimeline = [];
                for(const tweet of tweets) {
                    fixedTimeline.push({
                        'user_name': tweet.user.name,
                        'screen_name': tweet.user.screen_name,
                        'verified': tweet.user.verified,
                        'tweet' : tweet.retweeted_status? null : tweet.text,
                        'created_at': tweet.created_at,
                        'in_reply_to_screen_name': tweet.in_reply_to_screen_name,
                        'retweeted_status_name':  tweet.retweeted_status? tweet.retweeted_status.user.name : null,
                        'retweeted_status_screen_name': tweet.retweeted_status? tweet.retweeted_status.user.screen_name : null,
                        'retweeted_status_verified': tweet.retweeted_status? tweet.retweeted_status.user.verified : null,
                        'retweeted_status_created_at': tweet.retweeted_status? tweet.retweeted_status.created_at : null,
                        'retweeted_status_tweet': tweet.retweeted_status? tweet.retweeted_status.text : null,
                        'retweet_count': tweet.retweeted_status? tweet.retweeted_status.retweet_count : tweet.retweet_count,
                        'favorite_count': tweet.retweeted_status? tweet.retweeted_status.favorite_count : tweet.favorite_count
                    });
                }
                resolve(fixedTimeline);
            });
        });
    }

    static getProfile(params) {
        return new Promise((resolve, reject) => {
            client.get('users/show', params, (error, data) => {
                if (error) {
                    reject(error);
                }
                const fixedProfile = {
                    'name': data.name,
                    'screen_name': data.screen_name,
                    'verified': data.verified,
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

    static getFollowsByUserID(params) {
        return new Promise((resolve, reject) => {
            client.get('friends/list', params, (error, friends) => {
                if (error) {
                    reject(error);
                }
                const fixedFollows = [];
                for(const friend of friends.users) {
                    fixedFollows.push({
                        'name': friend.name,
                        'screen_name': friend.screen_name,
                        'verified': friend.verified,
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
                resolve(fixedFollows);
            });
        });
    }

    static getFollowersByUserID(params) {
        return new Promise((resolve, reject) => {
            client.get('followers/list', params, (error, followers) => {
                if (error) {
                    reject(error);
                }
                const fixedFollowers = [];
                for(const follower of followers.users) {
                    fixedFollowers.push({
                        'name': follower.name,
                        'screen_name': follower.screen_name,
                        'verified': follower.verified,
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
                resolve(fixedFollowers);
            });
        });
    }

    static getTweetsByUserID(params) {
        return new Promise((resolve, reject) => {
            client.get('statuses/user_timeline', params, (error, tweets) => {
                if (error) {
                    reject(error);
                }
                const fixedTweets = [];
                for(const tweet of tweets) {
                    fixedTweets.push({
                        'tweet' : tweet.retweeted_status? null : tweet.text,
                        'created_at': tweet.created_at,
                        'verified': tweet.verified,
                        'in_reply_to_screen_name': tweet.in_reply_to_screen_name,
                        'retweeted_status_name':  tweet.retweeted_status? tweet.retweeted_status.user.name : null,
                        'retweeted_status_screen_name': tweet.retweeted_status? tweet.retweeted_status.user.screen_name : null,
                        'retweeted_status_verified': tweet.retweeted_status? tweet.retweeted_status.user.verified : null,
                        'retweeted_status_created_at': tweet.retweeted_status? tweet.retweeted_status.created_at : null,
                        'retweeted_status_tweet': tweet.retweeted_status? tweet.retweeted_status.text : null,
                        'retweet_count': tweet.retweeted_status? tweet.retweeted_status.retweet_count : tweet.retweet_count,
                        'favorite_count': tweet.retweeted_status? tweet.retweeted_status.favorite_count : tweet.favorite_count
                    });
                }
                resolve(fixedTweets);
            });
        });
    }

    static searchTweets(params) {
        return new Promise((resolve, reject) => {
            client.get('search/tweets', params, (error, tweets) => {
                if (error) {
                    reject(error);
                }
                const fixedTweets = [];
                for(const tweet of tweets.statuses) {
                    fixedTweets.push({
                        'user_name': tweet.user.name,
                        'screen_name': tweet.user.screen_name,
                        'verified': tweet.user.verified,
                        'tweet' : tweet.retweeted_status? null : tweet.text,
                        'created_at': tweet.created_at,
                        'in_reply_to_screen_name': tweet.in_reply_to_screen_name,
                        'retweeted_status_name':  tweet.retweeted_status? tweet.retweeted_status.user.name : null,
                        'retweeted_status_screen_name': tweet.retweeted_status? tweet.retweeted_status.user.screen_name : null,
                        'retweeted_status_verified': tweet.retweeted_status? tweet.retweeted_status.user.verified : null,
                        'retweeted_status_created_at': tweet.retweeted_status? tweet.retweeted_status.created_at : null,
                        'retweeted_status_tweet': tweet.retweeted_status? tweet.retweeted_status.text : null,
                        'retweet_count': tweet.retweeted_status? tweet.retweeted_status.retweet_count : tweet.retweet_count,
                        'favorite_count': tweet.retweeted_status? tweet.retweeted_status.favorite_count : tweet.favorite_count
                    });
                }
                resolve(fixedTweets);
            });
        });
    }
};