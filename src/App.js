import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { getMuiTheme } from 'material-ui/styles';
import { green, greenA200, deepPurple900 } from 'material-ui/styles/colors';
import AboutMe from './components/aboutMe';
import Footer from './components/footer';
import Header from './components/header';
import LatestWork from './components/latest';
import Professional from './components/professional';
import Projects from './components/projects';
import Writing from './components/writing';
import './App.css';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: greenA200,
    accent1Color: '#3a7175',
  }
})


class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <Header />
          <a name="professional"></a>
          <Professional />
          <a name="writing"></a>
          <Writing />
          <a name="projects"></a>
          <Projects />
          <a name="aboutme"></a>
          <AboutMe />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
