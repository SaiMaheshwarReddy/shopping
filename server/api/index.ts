import express, { Errback, NextFunction, Request, Response } from "express";
import { AppDataSource } from "../src/configs/data-source";
import { ItemRouter } from "../src/routes/items.route";
import { CategoryRouter } from "../src/routes/categories.route";

interface CustomError extends Error {
  statusCode?: number;
}

AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.use(express.json());
    app.get("/", (req, res) => {
      res.json("Test CI/CD");
    });
    app.use("/api/v1/items", ItemRouter);
    app.use("/api/v1/categories", CategoryRouter);

    // Error handler middleware
    app.use(
      (err: CustomError, req: Request, res: Response, next: NextFunction) => {
        const statusCode = err.statusCode || 500;
        console.error(err.message, err.stack);
        res.status(statusCode).json({ message: err.message });
        return;
      }
    );

    return app.listen(process.env.PORT, () => {
      console.log(`app listening to port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
