import { ApiServices } from '../services/api-services';
import { types, unprotect } from "mobx-state-tree";

import '../App.css';
import { AthleteItem } from '../models/athlete';

const service: ApiServices = new ApiServices();


export const AthleteList = types.model({
  athletes: types.array(AthleteItem)
})
.actions( self => ({
  async getAthletes ( ) {
    const result = await service.getAthletes();
    if( result.toString().includes( "Network Error" ) ){
      alert( "Error, try again later" );
    }
    else if( result.message){
      if( result.message.includes( "401" ) ){
        alert( "Unknown error, try again" );
      }
      else{
        alert( "Unknown error" );
      }
    }
    else{
      self.athletes = result;
    } 
  }
}))

export const athleteStore = AthleteList.create({});

unprotect( athleteStore );