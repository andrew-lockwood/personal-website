import React from 'react';
import './App.css';
import Header from './components/Header'
import { Container, makeStyles, Theme, createStyles } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom'
import Image from 'material-ui-image'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
    black: {
      color: 'black'
    },
    mainContainer: {
      background: '#264653',
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      marginTop: '10px',
      marginBottom: '10px',
      borderRadius: '5px',
      minHeight: 'calc(100vh - 20px)'
    },
    appDivider: {
      marginTop: '0px',
      borderColor: '#f4a261'
    },
    galleryPicture: {
      margin: '10px',
      color: '#282c34'
    }
  }),
);

function App() {
  const classes = useStyles();
  
  return (
    <div className="App-header">
      <Container className={classes.mainContainer}>
        <Header />
        <hr className={classes.appDivider}></hr>
        <Switch>
          <Route path="/welcome">
            <h2>welcome</h2>
          </Route>
          <Route path="/projects">
            <h2>projects</h2>
            <div>
            <Image 
              src={process.env.PUBLIC_URL + '/images/forest-6jun20-compressed.png'} 
              aspectRatio={16/9} 
              color='#282c34'
            />
            </div>
            <Image 
              src={process.env.PUBLIC_URL + '/images/neighborhood-8jun20-compressor.jpg'} 
              className={classes.galleryPicture}
              aspectRatio={16/9} 
              color='#282c34'
            />
          </Route>
          <Route path="/about">
            <h2>about</h2>
            <p>hey. it's me.</p>
          </Route>
          <Route path="/contact">
            <h2>contact</h2>
          </Route>
          <Route path="/">
            <h2>hey.</h2>
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
