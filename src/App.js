import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { greenA200, deepPurple900 } from 'material-ui/styles/colors';
import Header from './components/header';
import LatestWork from './components/latest';
import Projects from './components/projects';
import Writing from './components/writing';
import './App.css';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: greenA200,
    accent1Color: deepPurple900,
  },
  appBar: {
    height: 50,
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <Header />
          <LatestWork />
          <Projects />
          <Writing />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
