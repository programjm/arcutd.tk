import React, { Component } from 'react';
import logo from './logo.svg';
import injectSheet, { jss, ThemeProvider } from 'react-jss';
import Home from './Components/Home';

const theme = {
  colors: {
    bright: "#fafafa"
  },
  sizes: {
    h1: 60,
    h2: 30,
  }
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
