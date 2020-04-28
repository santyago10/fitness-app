import { Login } from './logIn';
import React from 'react';
import { user, model } from '../stores/user.store';
import { NavLink } from 'react-router-dom';

export class LoginComponent extends React.Component{
    render(){
        return <div>
            <NavLink to = '/registration' className = 'link'>Registration </NavLink>
            <Login user = {user} model = {model}/>
        </div>
    }
}