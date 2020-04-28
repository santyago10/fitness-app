import React from 'react';
import { Link } from 'react-router-dom';

export class Exception extends React.Component {
    render(){
        return <h3>You are registrated already, please <Link to = '/login'>login</Link></h3>
    }
}
