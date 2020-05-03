import React from 'react';
import { user, model } from '../../stores/user.store';
import { Redirect, Link } from 'react-router-dom';
import { Registration } from './registration';



export class RegistrationComponent  extends React.Component{
    render(){
        if(user.isRegistrated)
        return <Redirect to = '/registrated'/>
        return <div>
            <Link  to = '/' className = 'link'>Login </Link>
            <Registration user = {user} model = {model}/>
        </div>
    }
}