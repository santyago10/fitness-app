import React from 'react';
import { Button } from '../../../shares/buttons';
import { observer } from 'mobx-react';
import { assignedProgramStore } from '../../../stores/assigned-program.store';
import { programsStore } from "../../../stores/program.store";
import '../../../App.css';

const Programs = observer( () => (
    <div id = "programsToAssign" className = "programsToAssign">
        <table>
            <caption>Choose program to assign <Button title = "Cancel" onClick = { e => assignedProgramStore.hideProgramsWindow( e ) }/></caption>
        <tbody>
        { programsStore.programs.map( program => {
            return <tr key = { program.id }>
                <td className = "programName">{ program.name }</td><td> <Button title = "Choose" onClick = { e => { assignedProgramStore.assignProgram( e, program.id ) }}/></td>
            </tr>
        })}
        </tbody>
        </table>
    </div>
))

export default Programs;