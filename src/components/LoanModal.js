import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ModalForm from './ModalForm';

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
          </ModalHeader>
          <ModalBody>
            {this.props.title}<br />
            Amount available: £{this.props.amount}<br />
            Loan ends in: {Math.round(this.props.endsIn/1440)} days
          </ModalBody>
          <ModalFooter> 
            <ModalForm />
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default LoanModal;
