import axios from 'axios';

export class ApiServices{

   private path = "http://localhost:5000";

   public getAllPrograms = async ( id ) => {
    try{
        const results = await axios.get ( `${this.path}/programs/${id}`, { withCredentials: true } );
        return results.data;
    }
        catch( err ){
        return err;
    }
   }

    public deleteProgram = async ( id ) => {
       try{
        const result = await axios.delete(`${this.path}/programs/${id}`, { withCredentials: true });
        return result.data;
       }
       catch( err ){
        return err;
       }
    }

    public editProgram = async ( id, body ) => {
        try{
            const result = await axios.patch( `${this.path}/programs/${id}`, body, { withCredentials: true } );
            return result.data;
        }
        catch( err ){
            return err;
        }
    }

    public getAthletes = async () => {
        try{
            const result = await axios.get(`${this.path}/athletes`, { withCredentials: true } );
            return result.data;
        }
        catch( err ){
            return err;
        }
    }

    public login = async ( body ) => {
        try{
            const result = await axios.post(`${this.path}/login`, body, { withCredentials: true } );
            let userId = await axios.post(`${this.path}/email`, result.data, { withCredentials: true } );
            return userId.data;
        }
        catch( err ){
            return err;
        }
    }

    public setRole = async ( data ) => {
        try{
            const result = await axios.post( `${this.path}/roles`, data, { withCredentials: true } );
            return result;
        }
        catch( err ){
            return false;
        }
    }

    public getRole = async ( id ) => {
        try{
            const result = await axios.get( `${this.path}/roles/${id}`, { withCredentials: true } );
            return result.data;
        }
        catch( err ){
            return false;
        }
    }

    public registration = async ( user ) => {
        try{     
                   debugger;

            const result = await axios.post( `${this.path}/registration`, user, { withCredentials: true } );
            return result.data;
        }
        catch( err ){
            debugger;
            return err;
        }
    }

    public isAuthorized = async () => {
        try{
            const result = await axios.get( `${this.path}/login`, { withCredentials: true } );
            return result.data;
        }
        catch( err ){
            return err;
        }
    }

    public getAthletesPrograms = async ( id ) => {
        try{
            const result = await axios.get( `${this.path}/assigned/${id}`, { withCredentials: true } );
            debugger;
            return result.data;
        }
        catch( err ){
            return false;
        }
    }

    public createProgram = async ( body ) => {
        try{
            const result = await axios.post( `${this.path}/programs`, body, { withCredentials: true } );
            return result.data;
        }
        catch( err ){
            return err;
        }
    }

    public assignProgram = async ( body ) => {
        try{
            debugger;
            const result = await axios.post( `${ this.path }/assigned`, body, { withCredentials: true } )
            return result.data;
        }
        catch( err ){
            return err;
        }
    }

    public deleteAssignedProgram = async ( id ) => {
        try{
            const result = await axios.delete( `${ this.path }/assigned/${ id }`, { withCredentials: true } );
            debugger;
            return result.data
        }
        catch( err ){ 
            return err;
        }
    }

    public logout = async () => {
        try{
            const result = await axios.get( `${this.path}/logout`, { withCredentials: true } );
            return result.data;
        }
        catch( err ){
            return false;
        }
    }
}