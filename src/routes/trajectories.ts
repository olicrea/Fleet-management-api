import { Router, Request, Response } from 'express';
import { historialTaxi } from '../controller/trajectories';

const trajectoriesRouter = Router();

trajectoriesRouter.get('/trajectories', historialTaxi);

export default trajectoriesRouter;