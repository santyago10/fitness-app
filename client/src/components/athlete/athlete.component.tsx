import React from 'react';
import { Link } from 'react-router-dom';
import { user } from '../../stores/user.store';
import { LogoutButton } from '../../shares/buttons';
import '../../App.css';
import AssignedProgramList from './assigned-programs-list';

export class Athlete2 extends React.Component{
    constructor( props ){
        super( props );
        user.isAuthenticate();
    }
    render(){
        if(user.role === 2)
        {    
            return <h2>You logged in like <Link to = '/coach'>coach</Link></h2>
        }
        else{
            return <div>
                <div className = "top">
                    <LogoutButton title = 'Logout' onClick = {e => user.logout(e)}/>
                </div>
                <AssignedProgramList/>
            </div>
        }
        
    }
}