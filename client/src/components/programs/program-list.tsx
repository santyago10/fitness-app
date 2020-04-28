import { observer } from "mobx-react";
import React from 'react';
import '../../App.css';
import { Program} from './program-item';
import { list, model } from '../../stores/program.store';
import { EditForm } from './edit-form';
import { Button, LogoutButton } from '../../shares/buttons';
import { CreateForm} from './create';
import { user } from "../../stores/user.store";
import { Link } from 'react-router-dom';

export const Programs = observer( props => (
    <div>
      <EditForm list = {list} model = {model}/> 
      <CreateForm list = {list} model = {model}/>
      <table className = 'programs'>
      <caption>My Programs <Button title = "Create" onClick = { e => list.showCreateForm ( e )}/></caption>
      <thead>
        <tr>
          <td className = 'programId'>ID</td><td className = 'programName'>Name</td><td>Duration</td><td></td>
        </tr>
      </thead>
      <tbody>
          { props.list.programs.map( program => (
          <Program list = { props.list}  programs = { program }/>
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