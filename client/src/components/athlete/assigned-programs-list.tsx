import { observer } from "mobx-react";
import React from 'react';
import { assignedProgramStore } from '../../stores/assigned-program.store';
import { user } from "../../stores/user.store";
import '../../App.css';
import { Button } from "../../shares/buttons";

export const MyPrograms = observer( props => (
    <div className = "myPrograms">
      <table>
        <caption>My programs</caption>
        <thead>
          <tr>
            <td>ID</td><td>Name</td><td>Duration</td>
          </tr>
        </thead>
        <tbody>
           { props.store.assignedPrograms.map( program => (
            <tr key = { program.id }>
              <td className = "programId">{ program.id }</td><td className = 'programName'> { program.name } </td><td>{ program.duration }</td><td><Button title = "Unsubscribe" onClick = { e => { assignedProgramStore.deleteMyProgram( e, program.id ) } } /></td>
            </tr>
          ))}
      </tbody>
      </table>
    </div>
));

class AssignedProgramList extends React.Component{
  componentDidMount(){
    assignedProgramStore.getMyPrograms( user.id );
  }
    render(){
      return (
        <MyPrograms store = {assignedProgramStore} />
      )
    }
}

export default AssignedProgramList;