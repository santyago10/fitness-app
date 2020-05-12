import { observer  } from "mobx-react";
import React from 'react';
import '../../App.css';
import { Button } from '../../shares/buttons';
import { user, model } from '../../stores/user.store';


export const Registration = observer( () => (
    <div className = 'registration-form' id = 'registration-form'>
      <h2 className = 'caption'>Register</h2>
         <form name = 'login'>
         <input type = 'text' className = 'text' value = {model.name} placeholder = 'Name' onChange = { e => model.setName( e.target.value ) } />
         <input type = 'text' className = 'text' value = {model.lastname}  placeholder = 'Lastname' onChange = { e => model.setLastname( e.target.value ) }/>
         <input type = 'text' className = 'text' value = {model.email} placeholder = 'Email' onChange = { e => model.setEmail( e.target.value ) }/>
         <input type = 'password' className = 'text' value = {model.password}  placeholder = 'Password' onChange = { e => model.setPassword( e.target.value )  } />
         <select className = 'select' onChange = {e => model.setRole( e.target.value ) }>
           <option >Coach</option>
           <option>Athlete</option>
         </select>
         <Button title = "Register" onClick = { e => { user.registration( e, model.name, model.lastname, model.email, model.role, model.password ) } }/>
     </form>
   </div>
));