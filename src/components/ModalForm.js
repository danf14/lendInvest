import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class ModalForm extends React.Component {
  render() {
    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleNumber">Investment amount (£)</Label><br />
          <Input type="number" name="number" id="exampleNumber" placeholder="Enter amount to Invest" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}