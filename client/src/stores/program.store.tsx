import { ApiServices } from '../services/api-services';
import { ProgramItem } from '../models/programs';
import { types, unprotect } from "mobx-state-tree";
import { user } from './user.store';

import '../App.css';

const service: ApiServices = new ApiServices();
let programId = 0;

export const model = ProgramItem.create({
  id: 0,
  name: "",
  duration: 0
})

export const ProgramList = types.model({
  programs: types.array( ProgramItem ),
  createForm: types.optional( types.boolean, false ),
  editForm: types.optional( types.boolean, false)
})
.actions(self => ({
  async getPrograms () {
    await user.isAuthenticate();
    const result = await service.getAllPrograms( user.id );
    
    if( result.toString().includes( "401" ) ){
      window.location.href = "/error";
    }
    else if( result.toString().includes( "Network Error" ) ){
      console.log( result );
      alert( "Server error, try again later" );
    }
    else if( result.message ){
      alert( result.message );
    }
    else{
      if( result === `Not found ${user.id}` )
      {
        return self.programs;
      }
      else{
        self.programs = result;
      }
    }
  },

  async createProgram (e, programName, programDuration ) {
    e.stopPropagation();
    e.preventDefault();

    if( programName === ""){
      alert( "Name required");
    }
    else{
      const body = {
        name: programName,
        duration: programDuration,
        coach_:user.id
      }

      const result = await service.createProgram( body );

      if( result.toString().includes( "Network Error" )){
        alert( "Server error, try again later" );
      }
      else if( result.message ){
        alert( "Uknown error, try again");
      }
      else{
        self.programs.push( result );
        this.hideCreateForm( e );
        model.setName( "" );
        model.setDuration( "0" );
      }
    }
  },

  async editProgram( e, inputName, inputDuration ){
    e.persist();
    e.preventDefault();
    if( inputName === "" ){
      alert( "Name required" )
    }
    else{
      let data = {
        name: inputName,
        duration: inputDuration,
        coach_: user.id
      }

      let result = await service.editProgram( programId, data );

      if( result.toString().includes( "Network Error" )){
        alert( "Server error, try again later" );
      }
      else if( result.message ){
        if( result.message.includes( "UPDATE" )){
          alert( "You can't update this program because it is assigned on athlete")
        }
        else{
          alert( "Unknown error, try again")
        }
      }

      else{
        for( let i = 0; i < self.programs.length; i++ ){
          if( self.programs[i].id === programId )
          {
            self.programs.splice( i, 1, result );
            this.hideForm( e );
            model.setName( "" );
            model.setDuration( "" );
            break;
          }
        }
      }
    }
  },
  
  async deleteProgram( e, id ) {
    e.stopPropagation();
    e.persist();

    let result = await service.deleteProgram( id );

    if( result.toString().includes( "Network Error" )){
      alert( "Server error, try again later" )
    }
    else if( result.message ){
      if( result.message.includes( "DELETE" )){
        alert( "You can't delete this program, because it is assigned on athlete" );
      }
      else{
        alert( "Unknown error, try again" );
      }
    }
    else
    {
      for( let i = 0; i < self.programs.length; i++ ){
        if(self.programs[i].id === id)
        {
          self.programs.splice( i, 1 );
          this.hideForm( e );
          break;
        }
      }
    }
  }
}))
.views( self => ({
  showForm( e, id ){
    e.stopPropagation();
    this.hideCreateForm( e );

    programId = id;

    self.editForm = true;
  },

  showCreateForm( e ){
    e.stopPropagation();

    this.hideForm( e );

    self.createForm = true;
  },

  hideCreateForm ( e ){
    e.preventDefault();
    self.createForm = false;
  },

  hideForm ( e ){
    e.preventDefault();

    self.editForm = false;
    programId = null;
  }
}))

export const list = ProgramList.create( {} );
unprotect( list );





