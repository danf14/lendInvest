import React, { Component } from 'react';
import '../assets/css/Loan.css';
import LoanModal from './LoanModal';

class Loan extends Component {

  constructor(props) {
    super(props);
    this.state = { modal: false };
    this.buttonAction = this.buttonAction.bind(this);
  }

  buttonAction() {
    this.setState({modal: !this.state.modal})
  }

  render() {

    var title = this.props.title,
        tranche = this.props.tranche,
        available = this.props.available,
        annualised_return = this.props.annualised_return,
        term_remaining = this.props.term_remaining/1440,
        ltv = this.props.ltv,
        amount = this.props.amount

    return (
      <li className="Loan">
        <h2>{title}</h2>
        <p>Tranche: {tranche}<br />
          Amount available: £{available}<br />
          Annualised return: {annualised_return}%<br />
          Term remaining: {term_remaining} days<br />
          LTV: {ltv}%<br />
          Total amount: £{amount}
        </p>
        <div>status</div>
        <LoanModal 
          title={this.props.title} 
          amount={this.props.available} 
          endsIn={this.props.term_remaining}
          />
      </li>
    );
  }
}

export default Loan;
