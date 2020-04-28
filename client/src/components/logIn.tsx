import { observer } from "mobx-react";
import React from 'react';
import '../App.css';
import { Button} from '../shares/buttons';

export const Login = observer( props =>(
    <div className = 'login-form' id = 'login-form'>
         <form name = 'login'>
          <h2 className = 'caption'>Login</h2>
          <label className = 'label'>Email</label>
         <input type = 'text' className = 'text' value = {props.model.email} placeholder = 'Email' onChange = { e => props.model.setEmail( e.target.value )}/>
         <label className = 'label'>Password</label>
         <input type = 'password' className = 'text' value = {props.model.password}  placeholder = 'Password' onChange = { e => props.model.setPassword( e.target.value )} />
         <Button title = "Login" onClick = { e => { props.user.sendUser(e, props.model.email, props.model.password )}}/>
     </form>
   </div>
))

