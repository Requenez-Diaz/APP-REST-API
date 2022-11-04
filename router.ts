import { Express } from 'express';
import authRouter from './auth/router';
import categoriesRouter from './categories/router'
import productRouter from './products/router';
import clientRouter from './client/router';
// import ("/tacks", tacksRouter)


const router = (app: Express) => {
    app.use("/auth", authRouter)
    app.use("/products", productRouter)
    app.use("/categories", categoriesRouter)
    app.use("/clients", clientRouter)
    // app.use("/tacks", tacksRouter)
}

export default router;

