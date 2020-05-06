import React from 'react';
import { LogoutButton} from '../../shares/buttons';
import { user } from "../../stores/user.store";
import { NavLink } from 'react-router-dom';
import { programsStore } from '../../stores/program.store';
import { athleteStore } from '../../stores/athlete.store';
import { Switch, Route } from 'react-router';
import AthleteList from './athletes/athlete-list';
import ProgramList from './programs/program-list';
import { observer } from 'mobx-react';

@observer
export class CoachWindow extends React.Component {
    constructor( props ){
        super( props );
        user.isAuthenticate();
        programsStore.getPrograms();
        athleteStore.getAthletes();
    }
    render(){
         if(user.role === 1)
        {
            return <h2>You logged in like <NavLink to = '/athlete'>athlete</NavLink></h2> 
        }
        else{
            return <div>
                <div className = "top">
                    <LogoutButton title = 'Logout' onClick = {e => user.logout(e)}/>
                    <NavLink to = '/coach/athletes' className = 'link' activeclassname = "active">Athletes</NavLink>
                    <NavLink to = '/coach/programs' className = 'link' activeclassname = "active">Programs</NavLink>  
                </div>
                <Switch>
                    <Route path = '/coach/athletes' component = { AthleteList }></Route>
                    <Route path = '/coach/programs' component = { ProgramList }/>
                </Switch>
            </div>
        }     
    }
}  
