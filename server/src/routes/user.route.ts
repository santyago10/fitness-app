import * as express from 'express';
import Route from '../interfaces/route.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateUserDto from '../dto/user.dto';
import UserController from '../controllers/user.controller';
import passport from 'passport';
import authenticationMiddleware from '../middleware/authentcation.middleware';


class UserRoute implements Route {
  public path = '/users';
  public athletesPath = "/athletes";
  public router = express.Router();
  private controller: UserController = new UserController();

  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {

    this.router.get( '/logout', this.controller.logout );

    this.router.get( '/login', this.controller.isAuthenticated );

    this.router.post( '/login',
      passport.authenticate( 'local' ),
      this.controller.login
    );

    this.router.post( '/registration', validationMiddleware( CreateUserDto ), this.controller.registration );

    this.router.get( this.path, authenticationMiddleware(), this.controller.getAll );

    this.router.post( '/email', authenticationMiddleware(), this.controller.getByEmail );

    this.router.get( this.athletesPath, authenticationMiddleware(), this.controller.getAthletes );
  }
}

export default UserRoute;