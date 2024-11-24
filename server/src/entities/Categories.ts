import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Items } from "./Items";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  display_name: string;

  @Column()
  description: string;

  @OneToMany(() => Items, (item) => item.category)
  items: Items[];
}
