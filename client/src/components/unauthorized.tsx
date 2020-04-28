import React from 'react';
import { Link } from 'react-router-dom';


export class Unauthorized extends React.Component {
    
    render(){
        return<div>
             <h2>Unauthorized</h2>
             <Link className = 'link' to = '/login'>Login</Link>
        </div>
    }
}
