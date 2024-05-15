import { swaggerDefinition } from './swagger';
import express, { Application } from 'express';
import router from './routes/taxis';
import trajectoriesRouter from './routes/trajectories';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const app: Application = express();

app.use(express.json());
app.use(router);
app.use(trajectoriesRouter);

const options = {
    swaggerDefinition: swaggerDefinition, 
    apis: ['./src/routes/*.ts'],
};

const swaggerDocs = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  
export default app;
