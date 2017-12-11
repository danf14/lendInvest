import React, { Component } from 'react';
import { Col } from 'reactstrap';
import Loan from '../components/Loan';
import '../assets/css/CurrentLoans.css';
import loanData from '../data/current-loans.json';

class CurrentLoans extends Component {

  render() {
    return (
      <Col xs="12" sm={{size:6, offset:3}} xl={{size:4, offset:4}} className="CurrentLoans">
        <h1>Current Loans</h1>
        {loanData.loans.map((loan, i) => {
          return (
            <Loan {...loanData.loans[i]} key={i} />
          );
        })}
      </Col>
    ) 
  }
}

export default CurrentLoans;
