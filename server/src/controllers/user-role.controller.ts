import * as express from 'express';
import UserRoleService from '../services/user-role.service';

 
class UserRoleController{

  private service = new UserRoleService();

  public create = async (request: express.Request, response: express.Response) => {
    const newUserRole = await this.service.create(request.body);
    response.send(newUserRole);
  } 

  public getAll = async (request: express.Request, response: express.Response) => {
    const userRole = await this.service.getAll();
    response.send(userRole);
  }

  public getById = async (request: express.Request, response: express.Response) => {
    const userRole = await this.service.getById(request.params.id);
    response.send(userRole);
  }
}

export default UserRoleController;