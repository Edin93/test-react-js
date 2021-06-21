import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      daysTillBD: '',
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

  componentDidUpdate(prevProps) {
    if (prevProps.firstName !== this.props.firstName) {
      this.setState({
        ...this.state,
        firstName: this.props.firstName,
      });
    }
    if (prevProps.daysTillBD !== this.props.daysTillBD) {
      this.setState({
        ...this.state,
        daysTillBD: this.props.daysTillBD,
      });
    }
  };

  render() {
    
    let {
      daysTillBD,
      firstName,
    } = this.state;

    return (
      <div>
        <h2>
          Bonjour {firstName ? `${firstName}` : `inconnu`} votre anniversaire est {daysTillBD ? `dans ${daysTillBD} jours` : `inconnu`}.
          Si cela est incorrect vous pouvez modifier les informations sur votre <Link to='/infos'>page informations</Link>.
        </h2>
      </div>
    );
  };
};

export default Home;
