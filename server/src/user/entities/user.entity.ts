import { Category } from 'src/category/entities/category.entity';
import { Transaction } from 'src/transaction/entities/transaction.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() //Сам будет создавать id
  id: number;

  @Column() //Просто колонки
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Category, (category) => category.user, {
    onDelete: 'CASCADE', ////При удалении удаляет все категории этого юзера
  })
  categories: Category[];

  @OneToMany(() => Transaction, (transaction) => transaction.user, {
    onDelete: 'CASCADE',
  })
  transactions: Transaction[];

  @CreateDateColumn() //Чаще всего для транзакций нужен
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
