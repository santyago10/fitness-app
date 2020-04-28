import { observer } from "mobx-react";
import React from 'react';
import { assignedProgramStore } from '../../stores/assigned-program.store';
import { user } from "../../stores/user.store";
import './athlete.css';

export const MyPrograms = observer( props => (
    <div className = "myPrograms">
      <table>
        <thead>
          <tr>
            <td>ID</td><td>Name</td><td>Duration</td>
          </tr>
        </thead>
        <tbody>
           { props.store.assignedPrograms.map( program => (
            <tr>
              <td>{ program.id }</td><td> { program.program_id } </td>
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