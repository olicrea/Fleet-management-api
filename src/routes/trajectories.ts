import { Router, Request, Response } from 'express';
import { historialTaxi, lastLocation } from '../controller/trajectories';

const trajectoriesRouter = Router();

trajectoriesRouter.get('/trajectories/:id/:day', historialTaxi);

trajectoriesRouter.get('/lastLocation', lastLocation);

export default trajectoriesRouter;