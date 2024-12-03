import { Request, Response, NextFunction } from "express";
import { ShoppingListService } from "../services/shoppingList.service";

export class ShoppingListController {
  public static async create(
    req: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const createdShoppingListId = ShoppingListService.create();
    } catch (err) {
      next(err);
    }
  }
}
