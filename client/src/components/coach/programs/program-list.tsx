import { observer } from "mobx-react";
import React from 'react';
import '../../../App.css';
import { programsStore, model } from '../../../stores/program.store';
import { EditForm } from './edit-form';
import { Button } from '../../../shares/buttons';
import { CreateForm} from './create';

@observer
class ProgramList extends React.Component{
  render(){
    if( programsStore.programs.length === 0 ){
     return  <div>
        { programsStore.createForm ? <CreateForm programsStore = {programsStore} model = {model}/> : null }
        <h3 className = 'noPrograms'>Your programs will be here <Button title = "Create" onClick = { e => programsStore.showCreateForm ( e )}/></h3>
     </div>
    }
    else{
      return <div>
        <Button title = "Create" onClick = { e => programsStore.showCreateForm ( e )}/>
        { programsStore.editForm ? <EditForm list = { programsStore } model = { model }/> : null }
        { programsStore.createForm ? <CreateForm list = { programsStore } model = { model }/> : null }
        <table className = 'programs'>
        <caption>My Programs</caption>
        <thead>
          <tr>
            <td className = 'programId'>ID</td><td className = 'programName'>Name</td><td>Duration</td><td></td>
          </tr>
        </thead>
        <tbody>
            { programsStore.programs.map( program => (
            <tr key = { program.id }>
            <td className = 'programId'>{ program.id}</td><td className = 'programName'>{ program.name}</td><td>{ program.duration} days</td>
            <td><Button title = "Edit" onClick = { e => {programsStore.showForm( e, program.id )}}/><span className = 'hidenId'>{ program.id}</span></td>
            <td><Button title = "Delete" onClick = { e => {programsStore.deleteProgram( e, program.id)}} /></td>
        </tr>
          ))}
        </tbody>
        </table>
    </div>
    }
  }
}

export default ProgramList;