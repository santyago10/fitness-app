import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import App from './app';
import config from './ormconfig';
import UserRoute from './routes/user.route';
import UserRoleRoute from './routes/user-role.route';
import ProgramRoute from './routes/program.route';
import AssignedProgramRoute from './routes/assigned-program.route';

 
(async () => {
  try {
    await createConnection(config);
  } catch (error) {
    console.log('Error while connecting to the database', error);
    return error;
  }
  const app = new App([new UserRoute, new ProgramRoute, new AssignedProgramRoute, new UserRoleRoute],
    5000
  );
  app.listen();
})();