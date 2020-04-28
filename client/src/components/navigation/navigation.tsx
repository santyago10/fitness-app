import React from 'react';
import { NavLink } from 'react-router-dom';
 
export class Navigation extends React.Component{
    render(){
        return <nav>
            <NavLink to = '/login' className = 'link'>Login </NavLink>
            <NavLink to = '/registration' className = 'link'>Registration</NavLink>
        </nav>;
    }
}