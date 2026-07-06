import express from "express";
import type { Application, Request, Response } from "express";
const app: Application = express();
const port: number = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("This is TypeScript");
});

app.listen(port, () => {
  console.log(`Server has started on ${port}`);
});
