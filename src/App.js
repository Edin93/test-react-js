import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Infos from './Infos';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      birthDate: new Date(2000, 0, 1, 0, 0, 0, 0),
    };
  };

  render() {
    
    let {
      firstName,
      lastName,
      birthDate,
    } = this.state;

    let daysTillBD = 20;

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
