import { AppDataSource } from "../configs/data-source";
import { Category } from "../entities/Categories";

export class CategoryService {
  public static readonly categoryRepository =
    AppDataSource.getRepository(Category);

  public static async getCategory(id: number | null) {
    if (id) {
      console.log(id);
      const category = await CategoryService.categoryRepository.findOneBy({
        id: id,
      });
      //   const asb = await CategoryService.categoryRepository.find();
      console.log(category, "cc");
      return category;
    }
    return null;
  }
}
