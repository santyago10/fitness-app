import { observer } from "mobx-react";
import React from 'react';
//import '../../App.css';
import { Button } from '../../../shares/buttons';
import { assignedProgramStore } from "../../../stores/assigned-program.store";



export const Athlete = observer( props => (
    <tr>
       <td>{ props.athletes.id }</td> <td>{ props.athletes.name }</td> <td>{ props.athletes.lastname }</td><td>{ props.athletes.email }</td>
       <td><Button title = "Assign program" onClick = { e => { assignedProgramStore.createId( e, props.athletes.id ) }}/></td>
    </tr>
));
