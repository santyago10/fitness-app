import * as express from 'express';
import UserService from '../services/user.service';
 
class UserController {
  public service: UserService = new UserService();

  public login = async (request: express.Request, response: express.Response) => {
    let result = await this.service.login( request.body );
    response.send( result );
  }
  
  public registration = async ( request: express.Request, response: express.Response ) => {
    let result = await this.service.registration(request.body);
    response.send( result );
  }

  public create = async (request: express.Request, response: express.Response) => {
    let newUser = await this.service.create(request.body);
    response.send(newUser);
  }

  public getByEmail = async (request: express.Request, response: express.Response) => {
    let result = await this.service.getByEmail(request.body.email);
    response.send( result );
  }

  public getAll = async (request: express.Request, response:express.Response) => {
    const users = await this.service.getAll();
    response.send(users);
  }

  public getAthletes = async (request: express.Request, response:express.Response) => {
    const athletes = await this.service.getAthletes();
    response.send(athletes);
  }

  public isAuthenticated = async ( request: express.Request, response:express.Response ) => {
    const result = await this.service.isAuthenticated( request );
    result ? response.send( result ) : response.status( 401 ).send();
  }

  public logout = async ( request: express.Request, response: express.Response ) => {
    const result = await this.service.logout( request );
    response.send( result );
  }
}

export default UserController;
