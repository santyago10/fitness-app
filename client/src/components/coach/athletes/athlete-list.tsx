import { observer } from "mobx-react";
import React from 'react';
import { Button } from '../../../shares/buttons';
import { athleteStore } from "../../../stores/athlete.store";
import Programs from "./programs";
import '../../../App.css';
import { assignedProgramStore } from "../../../stores/assigned-program.store";

@observer
  class AthleteList extends React.Component{
  render(){
    if( athleteStore.athletes.length === 0)
    {
      return  <h3 className = 'noPrograms'>No athletes registrated yet</h3>
    }
    else
    {    
      return <div>
      { assignedProgramStore.programsWindow ? <Programs/> : null }
        <table className = "athletes">
          <caption className = 'captionTable'>Athletes</caption>
          <thead>
            <tr>
              <td>ID</td><td>Name</td><td>LastName</td><td>Email</td>
            </tr>
          </thead>
          <tbody>
            { athleteStore.athletes.map( athlete => (
              <tr key = { athlete.id }>
                <td>{ athlete.id }</td><td>{ athlete.name }</td><td>{ athlete.lastname }</td><td>{ athlete.email }</td>
                <td><Button title = "Assign program" onClick = { e => { assignedProgramStore.showProgramsWindow( e, athlete.id ) }}/></td>
            </tr>
        ))}
        </tbody>
        </table>
      </div>
    }
    
  }
}

export default AthleteList;