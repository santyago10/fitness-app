import { ApiServices } from '../services/api-services';
import { types, unprotect } from "mobx-state-tree";
import { User } from '../models/user';
import '../App.css';

const service: ApiServices = new ApiServices();

export let userRole;

export const model = User.create({
    id:0,
    name: "",
    lastname: "",
    email: "johns@mail.com",
    role:"Coach",
    password: "14250"
});

const AuthorizedUser = types.model({
    id: types.optional( types.number, 0 ),
    email: types.optional( types.string, "" ),
    role: types.optional( types.number, 0 ),
    isRegistrated: types.optional( types.boolean, false)
})
.actions(self => ({
    async sendUser ( e, userEmail, userPassword ) {
        e.preventDefault();
        
        const data = {
            email: userEmail,
            password: userPassword
        }

        let result = await service.login( data );

        if( result.toString().includes( "Network Error" )){
            alert( "Server error, try again later" );
        }
        else if( result.message){
            if( result.message.includes( "401" ) ){
                alert( "Uncorrect login or password" );
            }
            else{
                alert( "Unknown error" );
            }
        }
        else{
            let role = await service.getRole( result.id );
            if( role.role_id === 1){
                window.location.href = '/athlete';
            }
            else{
                window.location.href = '/coach';
            }

            self.id = result.id;
            self.email = result.email;
            self.role = role.role_id;  
            model.setEmail("");
            model.setPassword(""); 
        }     
    },

    async isAuthenticate () {
        let result = await service.isAuthorized();

        if( result.toString().includes( "401" )){
            window.location.href = '/error';
        }
        else if( result.message === "Network Error" ){
            alert( "Server error" );
        }
        else{
            self.id = result.id;
            self.email = result.email;
            let role = await service.getRole(self.id);
            self.role = role.role_id; 
        }   
    },

    async registration ( e, userName, userLastname, userEmail, userRole, userPassword ) {
        e.preventDefault();
        let roleNumber;
        if(userRole === "Coach"){
            roleNumber = 2;
        }
        else
        roleNumber = 1;

        const data = {
            name: userName,
            lastname: userLastname,
            email: userEmail,
            password: userPassword
        }

        let result = await service.registration( data );
        
        if( result.toString().includes( "Network Error" ) )
        {
            alert( "Server error, try again later" );
        }
        else if( result.message){
            alert( "Unknown error" )
        }
        else if( result === "Registrated")
        {
            window.location.href = '/registrated';
        }
        else{
            const roleData = {
                user_: result.id,
                role_: roleNumber
            }
                
            let role = await service.setRole(roleData);

            if( role ){
                alert(" Success");
                window.location.href = '/login';
            }
            else{
                alert( "Error" );
            }
        }  
    },

    async logout (e) {
        e.stopPropagation();
        let result = await service.logout();
        if( result === "Logged out"){
            window.location.href = '/';
        }
        else{
            alert( "Server error, try again later" );
        }
    }

}));

export const user = AuthorizedUser.create({

});

unprotect(user);
