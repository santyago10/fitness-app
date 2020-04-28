import { ApiServices } from '../services/api-services';
import { types, unprotect } from "mobx-state-tree";
import { user } from './user.store';

import '../App.css';
import { AssignedProgramItem } from '../models/assigned-program';

const service: ApiServices = new ApiServices();
let athleteId = 0;

export const AssignedProgramList = types.model({
  assignedPrograms: types.array( AssignedProgramItem ),
})
.actions( self => ({
  async getMyPrograms ( id ) {
    await user.isAuthenticate();

    const result = await service.getAthletesPrograms( user.id );

    if( result.toString().includes( "Network Error" ) ){
      alert( "Server error, try again later" );
    }
    else if( result.message){
      if( result.message.includes( "401" ) ){
        window.location.href = "/error";
      }
      else{
        alert( "Unknown error, try again" );
      }
    }
    else if( result === `Not found ${user.id}`)
    {
      return self.assignedPrograms;
    }
    else{
      self.assignedPrograms = result;
    }
  },

  async createId( e, id ){
    e.stopPropagation();
    athleteId = id;
    let element = document.getElementById( "programsToAssign" );
    element.className = "programsToAssign";
  },

  async assignProgram( e, programId ){
    e.stopPropagation();

    let data = {
      athlete_: athleteId,
      program_: programId
    }
    let result = await service.assignProgram( data );

    if( result.toString().includes( "Network Error" ) ){
      alert( "Server error, try again later" );
    }
    else if( result.toString().includes( "401" )){
      window.location.href = "/error";
    }
    else if( result.message ){
      alert( "Unknow error, try again" );
    }
    else{
      alert( "Success" );
      let element = document.getElementById( "programsToAssign" );
      element.className = "hiddenBlock";
    }
  }
})
)

export const assignedProgramStore = AssignedProgramList.create({
});

unprotect(assignedProgramStore);
