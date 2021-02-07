import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, CssBaseline, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import Top from './Top';
import TimeLine from './TimeLine';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRigth: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Twedis
            </Typography>
            <Button color="inherit">TimeLine</Button>
            <Button color="inherit">Search</Button>
            <Button color="inherit">Profile</Button>
          </Toolbar>
        </AppBar>
        <div>
          <Route exact path="/" component={Top} />
          <Route path="/timeline" component={TimeLine} />
        </div>
      </BrowserRouter>
    </div>
  );
}