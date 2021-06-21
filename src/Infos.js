import React from 'react';
import { Form, FormGroup, Label, Input, } from 'reactstrap';

class Infos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      birthDate: '',
    };
    this.handleChange = this.handleChange.bind(this);
  };

  componentDidMount() {
    let {
      firstName,
      lastName,
      birthDate,
    } = this.props;

    this.setState({
      firstName,
      lastName,
      birthDate,
    });
  };

  componentDidUpdate(prevProps) {
    let {
      firstName,
      lastName,
      birthDate,
    } = this.props;

    if (prevProps.firstName !== firstName) {
      this.setState({
        ...this.state,
        firstName,
      });
    }
    
    if (prevProps.lastName !== lastName) {
      this.setState({
        ...this.state,
        lastName,
      });
    }
    
    if (prevProps.birthDate !== birthDate) {
      this.setState({
        ...this.state,
        birthDate,
      });
    }

  };

  handleChange(e) {
    let {
      name,
      value,
    } = e.target;
    this.props.updateField(name, value);
  };

  render() {
    let {
      firstName,
      lastName,
      birthDate,
    } = this.state;

    return(
      <div>
        <Form>
          <FormGroup>
            <Label for="firstName">Prenom</Label>
            <Input
              value={firstName}
              onChange={(e) => this.handleChange(e)}
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Write your firstname"
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Nom</Label>
            <Input
              value={lastName}
              onChange={(e) => this.handleChange(e)}
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Write your lastname"
            />
          </FormGroup>
          <FormGroup>
            <Label for="birthDate">Date de naissance</Label>
            <Input
              value={birthDate}
              onChange={(e) => this.handleChange(e)}
              type="date"
              name="birthDate"
              id="birthDate"
              placeholder="Input your date of birth"
            />
          </FormGroup>
        </Form>
      </div>
    );
  };
};

export default Infos;
