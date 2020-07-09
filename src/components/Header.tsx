import { makeStyles, Theme, createStyles, Toolbar, Typography, Button, Divider } from "@material-ui/core";
import React from "react";
import { NavLink, Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    headerLink: {
      color: 'white',
      padding: '10px',
      textTransform: 'uppercase',
      fontSize: 'small'
    },
    toolbar: {
      display: 'flex',
      flexWrap: 'wrap'
    }
  }),
);

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          Andrew Lockwood
        </Typography>
        <div className={classes.toolbar}>
          <Typography className={classes.headerLink}><NavLink to="/welcome" activeClassName="selected">Welcome</NavLink></Typography>
          <Typography className={classes.headerLink}><NavLink to="/projects" activeClassName="selected">Projects</NavLink></Typography>
          <Typography className={classes.headerLink}><NavLink to="/about" activeClassName="selected">About</NavLink></Typography>
          <Typography className={classes.headerLink}><NavLink to="/contact" activeClassName="selected">Contact</NavLink></Typography>
        </div>
      </Toolbar>
    </div>
  );
}
