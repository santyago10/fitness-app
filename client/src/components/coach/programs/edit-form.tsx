import { observer } from "mobx-react";
import React from 'react';
import '../../../App.css';
import { Button} from '../../../shares/buttons';
import { programsStore, model } from '../../../stores/program.store';

export const EditForm = observer( () =>(
    <div className = 'displayBlock' id = 'edit-form'>
         <form name = 'edit-program'>
          <p>Type new values</p>
         <input type = 'text'  value = { model.name } placeholder = 'Name' onChange = { e => model.setName( e.target.value )}/>
         <input type = 'number' value = { model.duration.toString() } min = "0" placeholder = 'Duration' onChange = { e => model.setDuration( e.target.value )} required/>
         <Button title = "Edit" onClick = { e => { programsStore.editProgram(e, model.name, model.duration )}}/>
         <Button title = "Cancel" onClick = { e => { programsStore.hideForm(e)}}/>
     </form>
   </div>
) )
