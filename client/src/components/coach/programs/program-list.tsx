import { observer } from "mobx-react";
import React from 'react';
import '../../../App.css';
import { list, model } from '../../../stores/program.store';
import { EditForm } from './edit-form';
import { Button, LogoutButton } from '../../../shares/buttons';
import { CreateForm} from './create';
import { user } from "../../../stores/user.store";
import { Link } from 'react-router-dom';

export const Programs = observer( props => (
    <div>
      { list.editForm ? <EditForm list = {list} model = {model}/> : null }
      { list.createForm ? <CreateForm list = {list} model = {model}/> : null }
      <table className = 'programs'>
      <caption>My Programs <Button title = "Create" onClick = { e => list.showCreateForm ( e )}/></caption>
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

class ProgramList extends React.Component{
  componentDidMount(){
    list.getPrograms();
  }
  render(){
    return <div>
      <Link to = '/athletes' className = 'link'>Athletes</Link>
      <LogoutButton title = 'Logout' onClick = { e => user.logout( e ) }/>
      <Programs list = { list } model = { model }/>
    </div> 
  }
}

export default ProgramList;