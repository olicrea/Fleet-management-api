import { Router } from 'express';
import { listTaxis } from '../controller/taxis';

const router = Router();

router.get('/taxis', listTaxis); // /:uid req.params En esta parte se ve la diferencia entre query y params
// http://localhost:3001/taxis?ultimoId=7262
export default router;
