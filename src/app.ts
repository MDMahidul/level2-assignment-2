import express, { Application, Request, Response } from "express";
import cors from 'cors';
import { ProductRouters } from "./modules/product/product.routes";
import { OrderRouters } from "./modules/order/order.routes";

const app:Application = express();

app.use(express.json());
app.use(cors());

//product router endpoints
app.use('/api/products',ProductRouters);

//order router endpoints
app.use('/api/orders', OrderRouters);

/* app.get("/", (req:Request, res:Response) => {
  res.send("Hello miki!");
}); */

export default app;
