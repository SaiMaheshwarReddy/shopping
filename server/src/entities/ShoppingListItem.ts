import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ShoppingList } from "./ShoppingList";
import { Items } from "./Items";

@Entity()
export class ShoppingListItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column()
  purchased: boolean;

  @ManyToOne(() => ShoppingList, (shoppingList) => shoppingList.items)
  shoppingList: ShoppingList;

  @ManyToOne(() => Items, { eager: true })
  item: Items;
}
