import React from 'react';
import { Link } from 'react-router-dom';
import { user } from '../../stores/user.store';
import { LogoutButton } from '../../shares/buttons';
import '../../App.css';
import AssignedProgramList from './assigned-programs-list';
import { observer } from 'mobx-react';

@observer
export class Athlete extends React.Component{
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
                    <p className = "email">{ user.email }</p>
                    <LogoutButton title = 'Logout' onClick = {e => user.logout(e)}/>
                </div>
                <AssignedProgramList/>
            </div>
        }
        
    }
}