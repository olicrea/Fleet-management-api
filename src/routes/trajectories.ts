import { Router, Request, Response } from 'express';

const trajectoriesRouter = Router();

trajectoriesRouter.get('/trajectories', (req: Request, res: Response) => {
  // Aquí iría la lógica para obtener y enviar la lista de trayectorias
  res.json({ message: 'Lista de trayectorias' });
});

export default trajectoriesRouter;