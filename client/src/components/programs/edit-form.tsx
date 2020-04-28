import { observer } from "mobx-react";
import React from 'react';
import '../../App.css';
import { Button} from '../../shares/buttons';

export const EditForm = observer( props =>(
    <div className = 'edit-form' id = 'edit-form'>
         <form name = 'edit-program'>
          <p>Type new values</p>
         <input type = 'text'  value = { props.model.name } placeholder = 'Name' onChange = { e => props.model.setName( e.target.value )}/>
         <input type = 'number' value = { props.model.duration.toString() } min = "0" placeholder = 'Duration' onChange = { e => props.model.setDuration( e.target.value )} required/>
         <Button title = "Send" onClick = { e => { props.list.editProgram(e, props.model.name, props.model.duration )}}/>
         <Button title = "Cancel" onClick = { e => { props.list.hideForm(e)}}/>
     </form>
   </div>
) )
