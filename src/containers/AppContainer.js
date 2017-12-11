import React, { Component } from 'react';
import { Row } from 'reactstrap';
import CurrentLoans from './CurrentLoans';

class AppContainer extends Component {
  render() {
    return (
      <Row style={{padding:'10px'}}>
        <CurrentLoans />
      </Row>
    );
  }
}

export default AppContainer;
