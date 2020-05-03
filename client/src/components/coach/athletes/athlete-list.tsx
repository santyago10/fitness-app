import { observer } from "mobx-react";
import React from 'react';
import { LogoutButton, Button } from '../../../shares/buttons';
import { athleteStore } from "../../../stores/athlete.store";
import { user } from "../../../stores/user.store";
import { Link } from 'react-router-dom';
import Programs from "./programs";
import { list } from "../../../stores/program.store";
import '../../../App.css';
import { assignedProgramStore } from "../../../stores/assigned-program.store";

export const Athletes = observer( props => (
      <table className = "athletes">
        <thead>
          <tr>
            <td>ID</td><td>Name</td><td>LastName</td><td>Email</td>
          </tr>
        </thead>
        <tbody>
           {props.athleteStore.athletes.map( athlete => (
            <tr key = { athlete.id }>
              <td>{ athlete.id }</td><td>{ athlete.name }</td><td>{ athlete.lastname }</td><td>{ athlete.email }</td>
              <td><Button title = "Assign program" onClick = { e => { assignedProgramStore.showProgramsWindow( e, athlete.id ) }}/></td>
           </tr>
      ))}
      </tbody>
      </table>
  ));

  const Block = observer( props => (
    <div>
      { assignedProgramStore.programsWindow ? <Programs list = { list }/> : null }
    </div>
    ))

  class AthleteList extends React.Component{
    componentDidMount(){
      athleteStore.getAthletes();
      list.getPrograms();
    }
    render(){
      return <div>
        <LogoutButton title = 'Logout' onClick = {e => user.logout(e)}/>
        <Link to = '/programs' className = 'link'>Programs</Link>
        <Athletes athleteStore = { athleteStore } user = {user} />
        <Block/>
        </div>
      
    }
}

export default AthleteList;