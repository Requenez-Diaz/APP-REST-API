
import { Router, Request, Response, NextFunction } from "express";
import controller from "./controller";
import { requireAuth } from '../auth/middlewares';


const router = Router();

router.get("/:id",requireAuth, async (req: Request, res: Response) => {
    const categorias = await controller.list();
    res.json(categorias);
})

router.post("/", async (req: Request, res: Response) => {
    try {
        const Categories = await controller.store(req.body);
        res.status(201).json(Categories);
    }
    catch (error) {
        res.json({
            message: error
        })
    }
})

router.get ("/:id", requireAuth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const categorie = await controller.getOne(id);
        res.json(categorie);
    } catch (error) {
        res.json({
        })
    }
})

router.delete ("/:id", requireAuth,async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller.delete(req.params.id);
        res.status(204).end();
    } catch (error) {
        next(error);
    }
    
})

// router.update ("/:id",requireAuth, async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const { id } = req.params;
//         const updateCategorie = await controller.update(id, req.body);
//         res.json(updateCategorie);

//     } catch (error: any) {
//         res.json({
//             message: error.message
//         });
//      }
// });

export default router;
