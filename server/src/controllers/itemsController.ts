import { Response, Request, NextFunction } from "express";
import { Items } from "../entities/Items";
import { ItemsService } from "../services/items.service";

export class ItemsController {
  public static async search(req: Request, res: Response, next: NextFunction) {
    try {
      const search = req.query.search as string;
      const items = await ItemsService.findAll(search);
      res.status(200).json(items);
    } catch (err) {
      next(err);
    }
  }

  public static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const item = await ItemsService.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      next(err);
    }
  }
}
