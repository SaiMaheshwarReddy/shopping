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
      const { name, description, image_url, category }: Partial<Items> =
        req.body;
      const item = await ItemsService.create({
        name,
        description,
        image_url,
        category,
      });
      res.status(201).json(item);
    } catch (err) {
      next(err);
    }
  }

  public static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const updatedItem = await ItemsService.updateItem();
    } catch (err) {
      next(err);
    }
  }
}
