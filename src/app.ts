import express, { Request, Response } from "express";
const app = express();

app.get("/", (req:Request, res:Response) => {
  res.send("Hello miki!");
});

export default app;
