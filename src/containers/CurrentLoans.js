import React, { Component } from 'react';
import { Col } from 'reactstrap';
import Loan from '../components/Loan';
import '../assets/css/CurrentLoans.css';
import loanData from '../data/current-loans.json';

class CurrentLoans extends Component {

  constructor(props) {
    super(props);
    this.state = {
      available: loanData.loans.map((loan, i) => { 
        return parseInt((loanData.loans[i].available).replace(/,/g, ""), 10)
      })
    };
    console.log(this.state.available);
  }
  
  render() {

    const getSum = (total, num) => total + num;
    

    return (
      <Col xs="12" sm={{size:6, offset:3}} xl={{size:4, offset:4}} className="CurrentLoans">
        <h1>Current Loans</h1>
        {loanData.loans.map((loan, i) => {
          return (
            <Loan {...loanData.loans[i]} key={i} />
          );
        })}
        <p>Total amount available for investments: £{this.state.available.reduce(getSum)}</p>
      </Col>
    ) 
  }
}

export default CurrentLoans;
