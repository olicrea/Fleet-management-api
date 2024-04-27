import { Router } from 'express';
import { listaTaxis } from '../controller/taxis';

const router = Router();

router.get('/taxis', listaTaxis); // /:uid req.params En esta parte se ve la diferencia entre query y params

export default router;
