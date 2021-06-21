import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      daysTillBD: null,
      firstName: '',
    };
  };

  componentDidMount() {
    let {
      daysTillBD,
      firstName,
    } = this.props;
    this.setState({
      daysTillBD,
      firstName,
    });
  };

  render() {
    
    let {
      daysTillBD,
      firstName,
    } = this.state;

    return (
      <div>
        <h2>
          Bonjour {firstName} votre anniversaire est dans {daysTillBD} jours.
          Si cela est incorrect vous pouvez modifier les informations sur votre <Link to='/infos'>page informations</Link>.
        </h2>
      </div>
    );
  };
};

export default Home;
