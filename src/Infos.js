import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Infos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return(
      <div>
        <Form>
          <FormGroup>
            <Label for="firstName">Prenom</Label>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Write your firstname"
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Nom</Label>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Write your lastname"
            />
          </FormGroup>
          <FormGroup>
            <Label for="birthDate">Date de naissance</Label>
            <Input
              type="date"
              name="date"
              id="birthDate"
              placeholder="Input your date of birth"
            />
          </FormGroup>
        </Form>

      </div>
    )
  }
};

export default Infos;
