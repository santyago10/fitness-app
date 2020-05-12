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
        window.location.href = '/error';
      }
      else{
        alert( "Unknown error" );
      }
    }
    else{
      self.athletes = ( function (arr) {
        return arr.sort((a, b) => a.id > b.id ? 1 : -1);
    })( result );;
    } 
  }
}))

export const athleteStore = AthleteList.create({});

unprotect( athleteStore );