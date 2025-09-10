import { Request, Response, NextFunction } from "express";
import { ShoppingListService } from "../services/shoppingList.service";

export class ShoppingListController {
  public static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = req.body;

      try {
        const shoppingList = await ShoppingListService.create(payload);
        return res.status(201).json({
          message: "Shopping list created successfully",
          shoppingList,
        });
      } catch (error: any) {
        return res.status(500).json({
          message: error.message || "An error occurred",
        });
      }
    } catch (err) {
      next(err);
    }
  }
}
