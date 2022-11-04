
import { Router, Request, Response, NextFunction } from "express";
import controller from "./controller";
import { requireAuth } from '../auth/middlewares';


const router = Router();

router.get("/:id",requireAuth, async (req: Request, res: Response) => {
    const categorias = await controller.list();
    res.json(categorias);
})

router.post("./", async (req: Request, res: Response) => {
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

router.get("/:id", requireAuth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const model = await controller.getOne(id);
        res.json(model);
    } catch (error) {
        console.log("Archivo no encontrado");

        res.json({
            message: error
        })
    }
})

router.delete("/:id", requireAuth, async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        await controller.delete(id);
        res.status(204).json({

        })
    } catch (error: any) {
        if (error.name === 'inventaryException') {
            res.status(400).json({
                message: error
            })
        }
        if (error.message === 'Inventary not found') {
            res.status(404).json({
                message: error
            })
        }
    }
})
router.patch("/id", requireAuth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const model = await controller.update(req.params.id, req.body);
        res.status(200).json(model);

    } catch (error: any) {
        if (error.name === 'inventaryException') {
            res.status(400).json({
                message: error
            })
        }
        res.status(500).json({
            message: error
        });
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
