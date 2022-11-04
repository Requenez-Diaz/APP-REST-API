import { Router, Request, Response, NextFunction } from 'express';
import { requireAuth } from '../auth/middlewares';
import controller from './controller'
 

const router = Router();

router.get("/", requireAuth, async (req: Request, res: Response, next: NextFunction) => {
    const clientes = await controller.list();
    res.json(clientes);
});

router.post("./", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const client = await controller.clientes(req.body);
        res. status(201).json(client);
    } catch (error) {
        res.json({
            message: error
        })
    }
})

router.get("/:id", requireAuth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const client = await controller.getOne(id);
        res.json(client);
    } catch (error: any) {
        res.json({
            message: error.message
        })
    }
});

router.delete("/:id", requireAuth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const client = await controller.deleteOne(id);
        res.json(client);
        } catch (error: any) {
        res.json({
            message: error.message
        });
    };
});

router.patch("/:id", requireAuth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const client = await controller.updateOne(id);
        res.json(client);
        } catch (error: any) {
            res.json({
            message: error.message
            });
        };
} )



export default router;