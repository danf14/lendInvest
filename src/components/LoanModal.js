import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class LoanModal extends Component {

  constructor(props) {
    super(props);
    this.state = { modal: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ modal: !this.state.modal })
  }

  render() {
    return (
      <div>
        <Button onClick={ this.toggle } >Invest in Loan</Button>
        {console.log(this.state.modal)}
        <Modal isOpen={ this.state.modal } toggle={ this.toggle } >
          <ModalHeader toggle={this.toggle}>Invest in Loan<br />
          {this.props.title}</ModalHeader>
          <ModalBody>
            Amount available: £{this.props.amount}<br />
            Loan ends in: {this.props.endsIn/86400} days
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default LoanModal;
