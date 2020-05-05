import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route} from 'react-router';
import { LoginComponent } from './components/authorization/login-component';
import { CoachWindow } from './components/coach/coach.component';
import { Unauthorized } from './components/authorization/unauthorized';
import { RegistrationComponent } from './components/registration/registration.component';
import { Athlete2 } from './components/athlete/athlete.component';
import './App.css';
import AssignedProgramList  from './components/athlete/assigned-programs-list';

class App extends React.Component {
  render() {
    return <div>
      <Router>
          <Switch>
              <Route exact path = '/'  component = {LoginComponent}/>
              <Route path = '/coach' component = {CoachWindow}/>
              <Route exact path = '/error' component = {Unauthorized}/>
              <Route exact path = '/registration' component = {RegistrationComponent}/>
              <Route exact path = '/athlete' component = {Athlete2}/>
              <Route exact path = '/myprograms' component = { AssignedProgramList }/>
          </Switch>
      </Router>
    </div>
  }
}
export default App;
