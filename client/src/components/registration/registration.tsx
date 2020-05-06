import { observer  } from "mobx-react";
import React from 'react';
import '../../App.css';
import { Button } from '../../shares/buttons';

export const Registration = observer( props => (
    <div className = 'registration-form' id = 'registration-form'>
      <h2 className = 'caption'>Register</h2>
         <form name = 'login'>
         <input type = 'text' className = 'text' value = {props.model.name} placeholder = 'Name' onChange = { e => props.model.setName( e.target.value ) } />
         <input type = 'text' className = 'text' value = {props.model.lastname}  placeholder = 'Lastname' onChange = { e => props.model.setLastname( e.target.value ) }/>
         <input type = 'text' className = 'text' value = {props.model.email} placeholder = 'Email' onChange = { e => props.model.setEmail( e.target.value ) }/>
         <input type = 'password' className = 'text' value = {props.model.password}  placeholder = 'Password' onChange = { e => props.model.setPassword( e.target.value )  } />
         <select className = 'select' onChange = {e => props.model.setRole( e.target.value ) }>
           <option >Coach</option>
           <option>Athlete</option>
         </select>
         <Button title = "Register" onClick = { e => { props.user.registration( e, props.model.name, props.model.lastname, props.model.email, props.model.role, props.model.password ) } }/>
     </form>
   </div>
));