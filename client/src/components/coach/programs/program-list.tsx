import { observer } from "mobx-react";
import React from 'react';
import '../../../App.css';
import { list, model } from '../../../stores/program.store';
import { EditForm } from './edit-form';
import { Button } from '../../../shares/buttons';
import { CreateForm} from './create';

export const Programs = observer( props => (
    <div>
      <Button title = "Create" onClick = { e => list.showCreateForm ( e )}/>
      { list.editForm ? <EditForm list = {list} model = {model}/> : null }
      { list.createForm ? <CreateForm list = {list} model = {model}/> : null }
      <table className = 'programs'>
      <caption>My Programs</caption>
      <thead>
        <tr>
          <td className = 'programId'>ID</td><td className = 'programName'>Name</td><td>Duration</td><td></td>
        </tr>
      </thead>
      <tbody>
          { props.list.programs.map( program => (
          <tr key = { program.id }>
          <td className = 'programId'>{ program.id}</td><td className = 'programName'>{ program.name}</td><td>{ program.duration} days</td>
          <td><Button title = "Edit" onClick = { e => {list.showForm( e, program.id )}}/><span className = 'hidenId'>{ program.id}</span></td>
          <td><Button title = "Delete" onClick = { e => {list.deleteProgram( e, program.id)}} /></td>
       </tr>
        ))}
      </tbody>
      </table>
    </div>
  ));

@observer
class ProgramList extends React.Component{
  render(){
    if( list.programs.length === 0 ){
     return  <div>
        { list.createForm ? <CreateForm list = {list} model = {model}/> : null }
        <h3 className = 'noPrograms'>Your programs will be here <Button title = "Create" onClick = { e => list.showCreateForm ( e )}/></h3>
     </div>
    }
    else{
      return <Programs list = { list } model = { model }/> 
    }
  }
}

export default ProgramList;