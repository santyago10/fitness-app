import React from 'react';
import { LogoutButton} from '../../shares/buttons';
import { user } from "../../stores/user.store";
import { NavLink, Link } from 'react-router-dom';
import { list } from '../../stores/program.store';
import { athleteStore } from '../../stores/athlete.store';

export class CoachWindow extends React.Component {
    constructor( props ){
        super( props );
        user.isAuthenticate();
        list.getPrograms();
        athleteStore.getAthletes();
    }
    render(){
         if(user.role === 1)
        {
            return <h2>You logged in like <NavLink to = '/athlete'>athlete</NavLink></h2> 
        }
        else{
            return <div>
                <LogoutButton title = 'Logout' onClick = {e => user.logout(e)}/>
                <Link to = '/athletes' className = 'link'>Athletes</Link>
                <Link to = '/programs' className = 'link'>Programs</Link>  
            </div>
        }
        
    }
}  
