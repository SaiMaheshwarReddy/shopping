import { CategoryService } from "../services/category.service";
import { Request, Response, NextFunction } from "express";
export class CategoryController {
  public static async getCategories(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const allCategories = await CategoryService.getAllCategories();
      res.status(200).json(allCategories);
    } catch (err) {
      next(err);
    }
  }

  public static async getCategoryById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const foundCategory = await CategoryService.getCategory(
        Number(req.params.id) || null
      );
      res.status(200).json(foundCategory);
    } catch (err) {
      next(err);
    }
  }
}
