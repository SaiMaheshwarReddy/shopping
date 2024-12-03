import { AppDataSource } from "../configs/data-source";
import { Category } from "../entities/Categories";

export class CategoryService {
  private static readonly categoryRepository =
    AppDataSource.getRepository(Category);

  public static async getCategory(id: number | null) {
    if (id) {
      console.log(id);
      const category = await CategoryService.categoryRepository.findOneBy({
        id: id,
      });
      if (!category) {
        throw new Error(`Cannot find category with ID ${id}`);
      }
      return category;
    } else {
      throw new Error("Category ID is missing");
    }
  }
  public static async getAllCategories() {
    const categories = CategoryService.categoryRepository.find();
    return categories;
  }
}
