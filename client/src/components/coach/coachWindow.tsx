import React from 'react';
import { LogoutButton} from '../../shares/buttons';
import { user } from "../../stores/user.store";
import { NavLink, Link } from 'react-router-dom';

export class CoachWindow extends React.Component {
    componentWillMount(){
        console.log(user.role);
        user.isAuthenticate();
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
