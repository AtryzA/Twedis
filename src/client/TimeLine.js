import React, { useEffect, useState } from 'react';
import TweetCard from './TweetCard';

const params = {
  'count': 100,
  'exclude_replies': true
};

export default function TimeLine(props) {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const getTweet = () => {
      const url = new URL('http://127.0.0.1:3000/timeline');
      Object.keys(params).forEach(key => { url.searchParams.append(key, params[key]); });
      fetch(url).then(res => {
        res.json();
      }).then(json => {
        console.log(json);
        setTweets(json);
      });  
    };
    console.log(tweets);
    getTweet();
  }, []);

  return (
    <div>
      {(() => {
        for (const tweet of tweets) {
          <TweetCard user_name={tweet.user_name} profile_image_url={tweet.profile_image_url} tweet={tweet.tweet} created_at={tweet.created_at} />;
        }
      })()}
    </div>
  );
}