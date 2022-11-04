import { Router, Request, Response, NextFunction } from 'express';
import { requireAuth } from '../auth/middlewares';
import controller from './controller';

const router = Router();

router.get("/", requireAuth, async (req: Request, res: Response, next: NextFunction) => {
    const clientes = await controller.list();
    res.json(clientes);
});

export default router;