import { observer } from "mobx-react";
import React from 'react';
import { assignedProgramStore } from '../../stores/assigned-program.store';
import { user } from "../../stores/user.store";
import '../../App.css';
import { Button } from "../../shares/buttons";

@observer
class AssignedProgramList extends React.Component{
  constructor( props ){
    super( props );
    assignedProgramStore.getMyPrograms( user.id );
  }
  render(){
    if(assignedProgramStore.assignedPrograms.length === 0){
      return <h3 className = 'noPrograms'>Your programs will be here</h3>
    }
    else{
      return <div className = "myPrograms">
      <table>
        <caption>My programs</caption>
        <thead>
          <tr>
            <td>ID</td><td>Name</td><td>Duration</td>
          </tr>
        </thead>
        <tbody>
           { assignedProgramStore.assignedPrograms.map( program => (
            <tr key = { program.id }>
              <td className = "programId">{ program.id }</td><td className = 'programName'> { program.name } </td><td>{ program.duration } days</td><td><Button title = "Unsubscribe" onClick = { e => { assignedProgramStore.deleteMyProgram( e, program.id ) } } /></td>
            </tr>
          ))}
      </tbody>
      </table>
    </div>
    }
  }
}

export default AssignedProgramList;