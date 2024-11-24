import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
} from "typeorm";
import { Category } from "./Categories";
import { ShoppingList } from "./ShoppingList";

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

  @ManyToMany(() => ShoppingList, (shoppingList) => shoppingList.items)
  shoppingList: ShoppingList[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
