import * as express from 'express';
import { getRepository } from 'typeorm';
import CreateUserRoleDto from '../dto/user-role.dto';
import UserRole from '../models/user-role.entity';

class UserRoleService{

    private userRoleRepository;
    
    constructor(){
        this.userRoleRepository = getRepository( UserRole );
    }
    

    //Create role for user
    public create = async ( body ) => {
        try{
            const userRoleData: CreateUserRoleDto = body;
            const newUserRole = this.userRoleRepository.create( userRoleData );
            await this.userRoleRepository.save( newUserRole );
            return ( newUserRole );
        }
        catch( err ){
            return err;
        }
    }

    //Get all user roles
    public getAll = async () => {
        const userRole = await this.userRoleRepository.find();
        return ( userRole );
    }

    //Get user roles by id
    public getById = async ( id ) => {
        try{
            const userRole = await this.userRoleRepository.query( `SELECT role_id FROM user_role WHERE user_id = ${ id }` );
            if ( userRole ) {
            return( userRole[0] );
            } else {
                return( "Not found " + id );
            }
        }
        catch( err ){
            return err;
        }
    }
}

export default UserRoleService;