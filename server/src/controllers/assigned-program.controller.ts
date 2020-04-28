import * as express from 'express';
import AssignedProgramService from '../services/assigned-program.service';

 
class AssignedProgramController {

  private service:AssignedProgramService=new AssignedProgramService();

  public create = async (request: express.Request, response: express.Response) => {
    const newProgram = await this.service.create(request.body);
    response.send(newProgram);
  }

  public getAll = async (request: express.Request, response: express.Response) => {
    const program = await this.service.getAll();
    response.send(program);
  }

  public getByAthleteId = async (request: express.Request, response: express.Response) => {
    const program = await this.service.getByAthleteId(request.params.id);
    response.send(program);
  }

  public delete = async (request: express.Request, response: express.Response) => {
    const deleteResponse = await this.service.delete(request.params.id);
    response.send(deleteResponse);
  }
}

export default AssignedProgramController;
