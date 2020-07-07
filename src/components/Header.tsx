import { makeStyles, Theme, createStyles, Toolbar, Typography, Button, Divider } from "@material-ui/core";
import React from "react";

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
  }),
);

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Andrew Lockwood
        </Typography>
        <Button color="inherit">Welcome</Button>
        <Button color="inherit">Projects</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
      <Divider />
    </div>
  );
}
