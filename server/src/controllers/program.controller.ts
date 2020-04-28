import * as express from 'express';
import { getRepository } from 'typeorm';
import Controller from '../interfaces/route.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateProgramDto from '../dto/program.dto';
import Program from '../models/program.entity';
import ProgramService from '../services/program.service';
 
class ProgramController{
  private service: ProgramService = new ProgramService();

  public create = async (request: express.Request, response: express.Response) => {
    const newProgram = await this.service.create(request.body)
    response.send(newProgram);
  }

  public getAll = async (request: express.Request, response: express.Response) => {
    const program = await this.service.getAll();
    response.send(program);
  }

  public getByCoachId = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const program = await this.service.getByCoachId(request.params.id);
    response.send(program);
  }

  public edit = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const updatedProgram = await this.service.edit(request.params.id, request.body);
    response.send(updatedProgram);
    
  }
 
  public delete = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const deleteResponse = await this.service.delete(request.params.id);
    response.send(deleteResponse);
  }
}

export default ProgramController;
