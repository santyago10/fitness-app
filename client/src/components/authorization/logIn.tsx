import { observer } from "mobx-react";
import React from 'react';
import '../../App.css';
import { Button} from '../../shares/buttons';
import { user, model } from '../../stores/user.store';


export const Login = observer( () =>(
    <div className = 'login-form' id = 'login-form'>
         <form name = 'login'>
          <h2 className = 'caption'>Login</h2>
          <label className = 'label'>Email</label>
         <input type = 'text' className = 'text' value = { model.email} placeholder = 'Email' onChange = { e =>  model.setEmail( e.target.value )}/>
         <label className = 'label'>Password</label>
         <input type = 'password' className = 'text' value = { model.password}  placeholder = 'Password' onChange = { e =>  model.setPassword( e.target.value )} />
         <Button title = "Login" onClick = { e => {  user.login(e,  model.email,  model.password )}}/>
     </form>
   </div>
))

