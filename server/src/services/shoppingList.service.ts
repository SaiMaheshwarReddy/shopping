import { In } from "typeorm";
import { AppDataSource } from "../configs/data-source";
import { Items } from "../entities/Items";
import { ShoppingList } from "../entities/ShoppingList";
import { ShoppingListItem } from "../entities/ShoppingListItem";

export class ShoppingListService {
  private static shoppingListRepository =
    AppDataSource.getRepository(ShoppingList);
  private static shoppingListItemRepository =
    AppDataSource.getRepository(ShoppingListItem);
  private static itemRepository = AppDataSource.getRepository(Items);

  public static async create(payload: any) {
    const { listName, items }: any = payload;

    // Start a transaction
    return AppDataSource.transaction(async (manager) => {
      const shoppingList = manager.create(ShoppingList, {
        name: listName,
        status: "progress",
      });
      console.log(listName);
      const savedShoppingList = await manager.save(shoppingList);

      const itemIds = items.map((item: any) => item.itemId);
      console.log(itemIds);
      const existingItems = await ShoppingListService.itemRepository.findBy({
        id: In(itemIds),
      });

      if (existingItems.length !== items.length) {
        throw new Error("Some items do not exist");
      }

      const shoppingListItems = items.map((item: any) => {
        const foundItem = existingItems.find((i) => i.id === item.itemId);
        return manager.create(ShoppingListItem, {
          shoppingList: savedShoppingList,
          item: foundItem,
          quantity: item.quantity,
          purchased: item.purchased,
        });
      });

      await manager.save(ShoppingListItem, shoppingListItems);

      return savedShoppingList;
    });
  }
}
