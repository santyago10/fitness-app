import { types } from "mobx-state-tree";

export const ProgramItem = types.model({
    id: types.identifierNumber,
    name: types.string,
    duration: types.number
})
.actions( self =>({
    setName(newName){
        self.name = newName;
        console.log(self.name);
    },
    
    setDuration( newDuration ){
        if( newDuration === "" )
        {
            self.duration = 0;
        }
        else{
            self.duration = Number.parseInt( newDuration );
            console.log(self.duration);
        } 
    }  
}))




  