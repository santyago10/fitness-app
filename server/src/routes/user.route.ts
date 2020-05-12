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

    this.router.get('/logout', function(req, res){
      req.logout();
      res.send('Logged out');
      });

    this.router.get('/login', function ( req, res ) {
     if(req.isAuthenticated())
     {
      res.send( req.user );
     }
     else
     {
      res.status( 401 ).send();
     }
    }
    );

    this.router.post('/login',
      passport.authenticate( 'local' ),
       function( req, res ) {
        res.send( req.body );
      }
    );

    this.router.post( '/registration', validationMiddleware( CreateUserDto ), this.controller.registration );

    this.router.get( this.path, authenticationMiddleware(), this.controller.getAll );

    this.router.post( '/email', authenticationMiddleware(), this.controller.getByEmail );

    this.router.get( this.athletesPath, authenticationMiddleware(), this.controller.getAthletes );
  }
}

export default UserRoute;