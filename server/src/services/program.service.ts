import * as express from 'express';
import { getRepository } from 'typeorm';
import Program from '../models/program.entity';
import User from '../models/user.entity';
import CreateProgramDto from 'dto/program.dto';

class ProgramService{

  private programRepository;
  private coachRepository;
  
  constructor(){
    this.programRepository = getRepository(Program);
    this.coachRepository = getRepository(User);
  }

  
  //Create programm
  public create = async ( body ) => {
    try{
      const programData: CreateProgramDto = body;
      const newProgram = this.programRepository.create( programData );
      await this.programRepository.save( newProgram );
      return( newProgram );
    }
    catch( err ){
      return err;
    }
  }
  
  //Get all programs
  public getAll = async () => {
    const program = await this.programRepository.find();
    return(program);
  }
  
  //Get all programs created by coach
  public getByCoachId = async ( id ) => {
    try{
      const coachId = id;
      const coach = await this.coachRepository.findOne( coachId );
      const program = await this.programRepository.find( { coach_: coach } );
      if ( program.length !== 0 ) {
        return( program );
      }
      else {
        return( "Not found " + coachId );
      }
    }
    catch( err ){
      return err;
    }
  }

  //Edit program
  public edit = async ( id, body ) => {
    try{
      const programData: Program = body;
      await this.programRepository.update(id, programData);
      const updatedProgram = await this.programRepository.findOne( id );
      if ( updatedProgram ) {
        return( updatedProgram );
      } 
      else {
        return( "Not Found " + id );
      }
    }
    catch( err ){
      return err;
    }
  }

  //Delete program
  public delete = async ( id ) => {
    try{
      const deleteResponse = await this.programRepository.delete( id );
      if ( deleteResponse.affected !== 0 ) {
        return ( deleteResponse );
      }
      else {
        return( "Not Found " + id );
      }
    }
    catch( err ){
      return err;
    }
  }
}

export default ProgramService;