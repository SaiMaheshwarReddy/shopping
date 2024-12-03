import { NextFunction, Request, Response } from "express";

const tryCatch =
  (controller: () => Promise<object>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller();
    } catch (err) {
      next(err);
    }
  };
