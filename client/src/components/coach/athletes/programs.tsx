import React from 'react';
import { Button } from '../../../shares/buttons';
import { observer } from 'mobx-react';
import { assignedProgramStore } from '../../../stores/assigned-program.store';
import '../../../App.css';

const Programs = observer( props => (
    <div id = "programsToAssign" className = "hiddenBlock">
        <table>
            <caption>Choose program to assign</caption>
        <tbody>
        { props.list.programs.map( program => {
            return <tr>
                <td>{ program.name }</td><td> <Button title = "Choose" onClick = { e => { assignedProgramStore.assignProgram( e, program.id ) }}/></td>
            </tr>
        })}
        </tbody>
        </table>
    </div>
))


export default Programs;