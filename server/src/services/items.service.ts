import { Like } from "typeorm";
import { AppDataSource } from "../configs/data-source";
import { Items } from "../entities/Items";
import { CategoryService } from "./category.service";

export class ItemsService {
  private static readonly itemsRepository = AppDataSource.getRepository(Items);

  public static async findAll(search: string) {
    if (!search) {
      return await ItemsService.itemsRepository.find();
    }

    return await ItemsService.itemsRepository.find({
      where: [
        {
          name: Like(`%${search}%`),
        },
        {
          description: Like(`%${search}%`),
        },
      ],
    });
  }

  public static async create(item: Partial<Items>) {
    const { name, description, image_url, category } = item;
    const findCategory = await CategoryService.getCategory(
      Number(category) || null
    );
    console.log(findCategory, category, "findCategory");

    console.log(findCategory, "cat");
    const create = ItemsService.itemsRepository.create({
      name,
      description,
      image_url,
      category: findCategory,
    });

    return await ItemsService.itemsRepository.save(create);
  }

  public static async updateItem() {}
}
