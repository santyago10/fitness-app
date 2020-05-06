import * as express from 'express';
import { getRepository, createQueryBuilder } from 'typeorm';
import AssignedPrograms from '../models/assigned-program.entity';
import CreateAssignedProgramDto from '../dto/assigned-program.dto';
import User from '../models/user.entity';
import Program from '../models/program.entity';

class AssignedProgramService{
  
  private programRepository;
  private athleteRepository;
  private programs;

  constructor(){
    this.programRepository = getRepository( AssignedPrograms );
    this.programs = getRepository( Program );
    this.athleteRepository = getRepository( User );
  }
  
  //Assign program to athlete
  public create = async ( body ) => {
    try{
      let exist = await this.programRepository.findOne( { athlete_: body.athlete_, program_: body.program_ } );
      if( exist ){
        return "This program already assigned on this athlete";
      }
      else
      {
        const programData: CreateAssignedProgramDto = body;
        const newProgram = this.programRepository.create( programData );
        await this.programRepository.save( newProgram );
        return( newProgram );
      }
    }
    catch( err ){
      return err;
    }
  }

  //Get all assigned on athlete programs
  public getByAthleteId = async ( athleteId ) => {
    try{
      const athlete = await this.athleteRepository.findOne( { id: JSON.parse( athleteId ) } );
      const program = await this.programRepository.query( `SELECT * FROM assigned_programs WHERE athlete_id = ${ athlete.id }` );
      const programsInfo = await this.programs.findByIds( program.map( item => { return item.program_id } ) );

      if ( programsInfo.length !== 0 ) {
        return ( programsInfo );
      } 
      else {
        return( "Not found " + athleteId );
      }
    }
    catch( err ){
      return err;
    }
  }

  //Delete assigned program
  public delete = async ( id ) => {
    try{
      const deleteResponse = await this.programRepository.delete( { program_: id } );
      if ( deleteResponse.affected !== 0 ) {
        return( "Program " + id + " deleted succesfully" );
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

export default AssignedProgramService;