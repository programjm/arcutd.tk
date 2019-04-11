import React, { Component } from 'react';
import logo from './logo.svg';
import injectSheet, { jss, ThemeProvider } from 'react-jss';
import './App.css';
import Home from './Components/Home';

const theme = {

};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
  }
}

export default App;
