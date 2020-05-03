import { observer } from "mobx-react";
import React from 'react';
import '../../../App.css';
import { Button} from '../../../shares/buttons';

export const CreateForm = observer( props =>(
    <div className = 'displayBlock' id = 'create-form'>
         <form name = 'create-program'>
           <p>Type values</p>
         <input type = 'text' value = {props.model.name} placeholder = 'Name' onChange = { e => props.model.setName( e.target.value )}/>
         <input type = 'number' value = { props.model.duration.toString() } min = "0" placeholder = 'Duration' onChange = { e => props.model.setDuration( e.target.value )} />
         <Button title = "Create" onClick = { e => { props.list.createProgram(e, props.model.name, props.model.duration )}}/>
         <Button title = "Cancel" onClick = { e => { props.list.hideCreateForm(e)}}/>
     </form>
   </div>
) )