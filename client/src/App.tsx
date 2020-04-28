import * as React from 'react';
import ProgramList  from './components/programs/program-list';
import  AthleteList  from './components/coach/athletes/athlete-list';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route} from 'react-router';
import { LoginComponent } from './components/login-component';
import { CoachWindow } from './components/coach/coachWindow';
import  { Wrapper } from './components/wrapper';
import { Unauthorized } from './components/unauthorized';
import { RegistrationComponent } from './components/authorization/registration.component';
import { history } from 'react-router-history'
import { Exception } from './components/authorization/exception';
import { Athlete2 } from './components/athlete/athlete.component';
import './App.css';
import AssignedProgramList  from './components/athlete/assigned-programs-list';
//import { Coach } from './components/coach';


class App extends React.Component {
  render() {
    return <div>
      <Router history = {history}>
          <Switch>
              <Route exact path = '/login'  component = {LoginComponent}/>
              <Route exact path = '/' component = {Wrapper}/>
              <Route exact path = '/coach' component = {CoachWindow}/>
              <Route exact path = '/error' component = {Unauthorized}/>
              <Route exact path = '/registration' component = {RegistrationComponent}/>
              <Route exact path = '/registrated' component = {Exception}/>
              <Route exact path = '/athlete' component = {Athlete2}/>
              <Route exact path = '/athletes' component = {AthleteList}/>
              <Route exact path = '/programs' component = {ProgramList}/>
              <Route path = '/myprograms' component = { AssignedProgramList }/>
          </Switch>
      </Router>

     </div>
    
  }
}
export default App;
