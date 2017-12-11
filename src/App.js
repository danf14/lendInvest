import React, { Component } from 'react';
import { Container } from 'reactstrap';
import AppContainer from './containers/AppContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container fluid={true} className="App">
        <AppContainer />
      </Container>
    );
  }
}

export default App;
