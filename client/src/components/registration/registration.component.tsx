import React from 'react';
import { Link } from 'react-router-dom';
import { Registration } from './registration';

export class RegistrationComponent  extends React.Component{
    render(){
        return <div>
            <Link  to = '/' className = 'link'>Login </Link>
            <Registration/>
        </div>
    }
}