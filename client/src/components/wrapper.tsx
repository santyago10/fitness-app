import * as React from 'react';
import ProgramList  from '../components/programs/program-list';
import { Route} from 'react-router';
import { Navigation } from '../components/navigation/navigation';

//import { Coach } from './components/coach';


export class Wrapper extends React.Component {
  componentDidMount(){
    //user.isAuthenticate();
  }
  render() {
  
    return <div>
          <Navigation/>
          <Route exact path = '/programs' component = {ProgramList}/>
          {/* <Route exact path = '/athletes' component = {AthleteList}/> */}
     </div>
    
  }
}
