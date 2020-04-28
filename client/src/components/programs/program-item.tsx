import { observer } from "mobx-react";
import React from 'react';
import '../../App.css';
import { Button } from '../../shares/buttons';
import { list} from '../../stores/program.store'

export const Program = observer( props => (
    <tr>
       <td className = 'programId'>{props.programs.id}</td> <td className = 'programName'>{props.programs.name}</td> <td>{props.programs.duration} days</td>
       <td><Button title = "Edit" onClick = { e => {list.showForm( e, props.programs.id )}}/><span className = 'hidenId'>{props.programs.id}</span></td>
       <td><Button title = "Delete" onClick = { e => {list.deleteProgram( e, props.programs.id)}} /></td>
    </tr>
));

