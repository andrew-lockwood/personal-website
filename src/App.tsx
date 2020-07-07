import React from 'react';
import './App.css';
import Header from './components/Header'
import { Typography, Container } from '@material-ui/core';

function App() {
  return (
    <div className="App-header">
      <Container>
        <Header />
        <Typography variant="h6">hey.</Typography>
      </Container>
    </div>
  );
}

export default App;
