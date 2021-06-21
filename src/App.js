import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Infos from './Infos';
import axios from 'axios';

const URL = `https://reqres.in/api/users/1`;

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      birthDate: '',
    };
    this.updateField = this.updateField.bind(this);
    this.countDaysTillBD = this.countDaysTillBD.bind(this);
  };

  componentDidMount() {
    axios.get(URL)
    .then(res => {
      const data = res.data.data;
      let {
        first_name,
        last_name,
      } = data;
      this.setState({
        ...this.state,
        firstName: first_name,
        lastName: last_name,
      });
    })
    .catch(err => {
      console.log(err);
    });
  };

  updateField(name, value) {
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  countDaysTillBD() {
    let { birthDate, } = this.state;
    if (!birthDate) {
      return '';
    }

    let now = new Date();
    birthDate = new Date(birthDate);
    birthDate.setFullYear(now.getFullYear());
    if (now > birthDate) {
      birthDate.setFullYear(now.getFullYear() + 1);
    }

    let daysTillBD = Math.floor((birthDate - now) / (1000 * 60 * 60 * 24));
    return daysTillBD;
  };

  render() {
    let {
      firstName,
      lastName,
      birthDate,
    } = this.state;

    let daysTillBD = this.countDaysTillBD();

    return (
      <React.Fragment>
        <Router>
          <div className="navbar-container">
            <Navbar />
          </div>
          <Switch>
            <Route exact path='/'>
              <Home
                firstName={firstName}
                daysTillBD={daysTillBD}
              />
            </Route>
            <Route path='/infos'>
              <Infos
                updateField={this.updateField}
                firstName={firstName}
                lastName={lastName}
                birthDate={birthDate}
              />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  };
};

export default App;
