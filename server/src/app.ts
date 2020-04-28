import "reflect-metadata";
import express from 'express';
import * as bodyParser from 'body-parser';
import "es6-shim";
import { getRepository } from 'typeorm';
import  User from './models/user.entity';
//import BasicStrategy from 'passport-http';
import  passport  from "passport";
import  passportLocal from "passport-local";
import  session from 'express-session';
import bcrypt from 'bcrypt';

const LocalStrategy = passportLocal.Strategy;

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'},
  async function (userEmail, password, done) {
    const user = getRepository(User);

    let result = await user.findOne( { email: userEmail } )

    if( !result ){
      return done( null, false );
    }
    bcrypt
    .compare( password, result.password )
    .then( res => {
      console.log( "res", res);
      if ( !res ) { return done( null, false ); }
      return done( null, result );
    })
  }
));

passport.serializeUser(function ( user: any, done) {
  done(null, user.id);
});

 passport.deserializeUser( async function(userId: string, done) {
  const user = getRepository(User);

  let result = await user.findOne(userId);
  if(result)
    done(null, result);
 });



 

class App {
  public app: express.Application;
  public port: number;
 
  constructor(controllers,port) {
    this.app = express();
    this.port = port;
 
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }
 
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    // this.app.use(cors({
    //   credentials: true,
    // }));   
     this.app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "http://localhost:3000"  ); // update to match the domain you will make the request from
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH");
      res.header( "Access-Control-Allow-Credentials", "true");
      next();
    });
    this.app.use(session({ secret: 'SECRET', cookie: { maxAge: 60000 * 5 } }));
    this.app.use(passport.initialize());
    this.app.use(passport.session());
  }
 
  private initializeControllers( controllers ) {
    controllers.forEach( ( controller ) => {
      this.app.use( '/', controller.router );
    });
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
 
export default App;