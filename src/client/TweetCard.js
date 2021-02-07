import React from 'react';
import { makeStyles, Card, CardHeader, CardContent, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 450,
  },
}));

export default function TweetCard(props) {
  const classes = useStyles();

  return (
    <Card classes={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={this.props.profile_image_url} />
        }
        title={this.props.user_name}
        subheader={this.props.created_at}
      />
      <CardContent>
        {this.props.tweet}
      </CardContent>
    </Card>
  );
}