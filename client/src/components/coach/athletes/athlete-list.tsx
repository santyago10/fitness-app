import { observer } from "mobx-react";
import React from 'react';
import { Button } from '../../../shares/buttons';
import { athleteStore } from "../../../stores/athlete.store";
import { user } from "../../../stores/user.store";
import Programs from "./programs";
import { list } from "../../../stores/program.store";
import '../../../App.css';
import { assignedProgramStore } from "../../../stores/assigned-program.store";

export const Athletes = observer( props => (
  <div>
    { assignedProgramStore.programsWindow ? <Programs list = { list }/> : null }
        <table className = "athletes">
          <caption className = 'captionTable'>Athletes</caption>
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
      </div>
  ));

  class AthleteList extends React.Component{
    render(){
      return <div>
        <Athletes athleteStore = { athleteStore } user = {user} />
        </div>
      
    }
}

export default AthleteList;