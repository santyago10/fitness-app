import { observer } from "mobx-react";
import React from 'react';
import { LogoutButton } from '../../../shares/buttons';
import { Athlete } from './athlete-item';
import { athleteStore } from "../../../stores/athlete.store";
import { user } from "../../../stores/user.store";
import { Link } from 'react-router-dom';
import Programs from "./programs";
import { list } from "../../../stores/program.store";
import '../../../App.css';

export const Athletes = observer( props => (
    <div>
      <table>
        <thead>
          <tr>
            <td>ID</td><td>Name</td><td>LastName</td><td>Email</td>
          </tr>
        </thead>
        <tbody>
           {props.athleteStore.athletes.map( athlete => (
             <Athlete athletes = { athlete } />
      ))}
      </tbody>
      </table>
    </div>
  ));

  class AthleteList extends React.Component{
    componentDidMount(){
      athleteStore.getAthletes();
      list.getPrograms();
    }
    render(){
      return <div>
        <LogoutButton title = 'Logout' onClick = {e => user.logout(e)}/>
        <Link to = '/programs' className = 'link'>Programs</Link>
        <div className = "athleteWindow">
        <Athletes athleteStore = { athleteStore } user = {user} />
        <Programs list = { list }/>
        </div>
        </div>
      
    }
}

export default AthleteList;