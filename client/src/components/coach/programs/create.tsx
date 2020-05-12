import { observer } from "mobx-react";
import React from 'react';
import '../../../App.css';
import { Button} from '../../../shares/buttons';
import { programsStore, model } from '../../../stores/program.store';

export const CreateForm = observer( () =>(
    <div className = 'displayBlock' id = 'create-form'>
         <form name = 'create-program'>
         <p>Type values</p>
         <input type = 'text' value = {model.name} placeholder = 'Name' onChange = { e => model.setName( e.target.value )}/>
         <input type = 'number' value = { model.duration.toString() } min = "0" placeholder = 'Duration' onChange = { e => model.setDuration( e.target.value )} />
         <Button title = "Create" onClick = { e => { programsStore.createProgram(e, model.name, model.duration )}}/>
         <Button title = "Cancel" onClick = { e => { programsStore.hideCreateForm(e)}}/>
     </form>
   </div>
) )