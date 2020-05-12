import { types } from "mobx-state-tree";


export const User = types.model({
    id: types.identifierNumber,
    name: types.string,
    lastname: types.string,
    email: types.string,
    role: types.string,
    password: types.string
})
.actions( self =>({
    setEmail(newEmail){
        self.email = newEmail;
    },
    
    setPassword(newPassword){
        self.password = newPassword;
    },

    setName(newName){
        self.name = newName;
    } ,

    setLastname(newLastname){
        self.lastname = newLastname;
    },

    setRole(newRole){
        self.role = newRole;
    } 
}))