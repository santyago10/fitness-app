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
        console.log(self.email);
    },
    
    setPassword(newPassword){
        self.password = newPassword;
        console.log(self.password);
    },

    setName(newName){
        self.name = newName;
        console.log(self.name);
    } ,

    setLastname(newLastname){
        self.lastname = newLastname;
        console.log(self.lastname);
    },

    setRole(newRole){
        self.role = newRole;
        console.log(self.role);
    } 
    
}))