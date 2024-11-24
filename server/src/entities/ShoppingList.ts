import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Items } from "./Items";

@Entity()
export class ShoppingList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  // TODO
  status: string;

  @ManyToMany(() => Items, (item) => item.shoppingList)
  @JoinTable({
    name: "shopping_list_items",
    joinColumn: {
      name: "shopping_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "item_id",
      referencedColumnName: "id",
    },
  })
  items: Items[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
