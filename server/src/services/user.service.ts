import e, * as express from 'express';
import { getRepository } from 'typeorm';
import CreateUserDto from '../dto/user.dto';
import User from '../models/user.entity';
import Role from '../models/role.entity';
import UserRole from '../models/user-role.entity';
import bcrypt from 'bcrypt';

class UserService {
    
    private userRepository;
    private roleRepository;
    private userRoleRepository;
    private hashPassword;


    constructor(){
        this.userRepository = getRepository( User );
        this.roleRepository = getRepository( Role );
        this.userRoleRepository = getRepository( UserRole );
    }

    public registration = async ( body ) => {
        try{
            let result = await this.userRepository.find( { email: body.email } );
            if ( result[0] )
            return "Registrated";   
            else{                
                await ( bcrypt
                .genSalt( 12 )
                .then( salt => {
                  console.log(`Salt: ${ salt }`);
              
                  return bcrypt.hash( body.password, salt );
                })
                .then( async ( hash ) => {
                  console.log(`Hash: ${ hash }`);
                  this.hashPassword = hash;
                }))
                .catch( err => console.error("Hashing error ", err.message ) );

                body.password = this.hashPassword;

                const userData: CreateUserDto = body;
                const newUser = this.userRepository.create( userData );
                await this.userRepository.save( newUser );
                return( newUser );
            } 
        }
        catch( err ){
            return err;
        }
    }
  
    
    public create = async ( body ) => {
        try{
            const userData: CreateUserDto = body;
            const newUser = this.userRepository.create(userData);
            await this.userRepository.save(newUser);
            return(newUser);
        }
        catch( err ){
            return err;
        }
    }

    public getByEmail = async ( userEmail ) => {
        try{
            let result = await this.userRepository.findOne( { email: userEmail } );
            return ( result );
        }
        catch( err ){
            return err;
        }
    }

    //Get all users
    public getAll = async () => {
        const users = await this.userRepository.find();
        return (users);
    }
    
    //Get all athletes
    public getAthletes = async () => {
        const role  = await this.roleRepository.findOne( { id: 1 } );
        const users = await this.userRepository.find();
        let athlete;
        const athletes = users.map( async( item ) => {
            const user: User = item;
            athlete = await this.userRoleRepository.findOne( { user_: user, role_: role } );
            if( athlete ){
               return item; 
            }
        });
        const promiseAthletes = Promise.all( athletes );
        const filteredAthletes = (await promiseAthletes).filter(item => {
            if( item !== undefined )
            return item;
        });
        return filteredAthletes;  
    }
}

export default UserService;