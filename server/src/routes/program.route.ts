import * as express from 'express';
import { getRepository } from 'typeorm';
import Route from '../interfaces/route.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateProgramDto from '../dto/program.dto';
import ProgramController from '../controllers/program.controller';
import authenticationMiddleware from '../middleware/authentcation.middleware';
 
class ProgramRoute implements Route {
  public path = '/programs';
  public router = express.Router();
  private controller:ProgramController = new ProgramController();
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, authenticationMiddleware(), validationMiddleware(CreateProgramDto), this.controller.create);
    this.router.get(this.path, authenticationMiddleware(), this.controller.getAll);
    this.router.get(`${this.path}/:id`, authenticationMiddleware(), this.controller.getByCoachId);
    this.router.patch(`${this.path}/:id`, authenticationMiddleware(), validationMiddleware(CreateProgramDto), this.controller.edit);
    this.router.delete(`${this.path}/:id`, authenticationMiddleware(), this.controller.delete);
  }
}

export default ProgramRoute;
