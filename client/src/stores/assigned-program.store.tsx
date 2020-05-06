import { ApiServices } from '../services/api-services';
import { types, unprotect } from "mobx-state-tree";
import { user } from './user.store';

import '../App.css';
import { AssignedProgramItem } from '../models/assigned-program';
import { programsStore } from './program.store';

const service: ApiServices = new ApiServices();
let athleteId: number;

export const AssignedProgramList = types.model({
  assignedPrograms: types.array( AssignedProgramItem ),
  programsWindow: types.optional( types.boolean, false )
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
      self.assignedPrograms = ( function (arr) {
        return arr.sort((a, b) => a.id > b.id ? 1 : -1);
    })( result );;
    }
  },

  async assignProgram( e, programId ){
    e.persist();
    e.stopPropagation();

    let data = {
      athlete_: athleteId,
      program_: programId
    }
    let result = await service.assignProgram( data );
    debugger;

    if( result.toString().includes( "Network Error" ) ){
      alert( "Server error, try again later" );
    }
    else if( result.toString().includes( "401" )){
      window.location.href = "/error";
    }
    else if( result.message ){
      alert( "Unknow error, try again" );
    }
    else if( result.toString().includes( "This program" )){
      alert( "This athlete is already assigned on this program" );
    }
    else{
      alert( "Success" );
      self.programsWindow = false;
      athleteId = null;
    }
  }, 

  async deleteMyProgram( e, id ){
    e.stopPropagation();
    e.persist();

    let result = await service.deleteAssignedProgram( id );

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
      for( let i = 0; i < self.assignedPrograms.length; i++ ){
        if(self.assignedPrograms[i].id === id)
        {
          self.assignedPrograms.splice( i, 1 );
          break;
        }
      }
    }
  }
})
)
.views( self => ({
  showProgramsWindow( e, id ){
    e.stopPropagation();
    if( programsStore.programs.length === 0){
      alert( "You don't have programs yet");
    }
    else
    {
      athleteId = id;
      console.log( athleteId );
      
      self.programsWindow = true;
    }
  },

  hideProgramsWindow( e ){
    e.persist();
    e.stopPropagation();

    self.programsWindow = false;
    
    athleteId = null;
    console.log( athleteId );
  }
}))

export const assignedProgramStore = AssignedProgramList.create({
});

unprotect(assignedProgramStore);
