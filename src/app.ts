import express, { Application, Request, Response } from "express";
import cors from 'cors';
import { ProductRouters } from "./modules/product/product.routes";

const app:Application = express();

app.use(express.json());
app.use(cors());

//router endpoints
app.use('/api/products',ProductRouters);

/* app.get("/", (req:Request, res:Response) => {
  res.send("Hello miki!");
}); */

export default app;
