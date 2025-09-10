import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  OneToMany,
} from "typeorm";
import { Category } from "./Categories";
import { ShoppingList } from "./ShoppingList";
import { ShoppingListItem } from "./ShoppingListItem";

@Entity()
export class Items {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image_url: string;

  @ManyToOne(() => Category, (category) => category.items)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @OneToMany(
    () => ShoppingListItem,
    (shoppingListItem) => shoppingListItem.item
  )
  shoppingListItems: ShoppingListItem[];

  // @ManyToMany(() => ShoppingList, (shoppingList) => shoppingList.items)
  // shoppingList: ShoppingList[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
