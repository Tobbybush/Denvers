import { Column, Entity } from 'typeorm';
import { Exclude } from 'class-transformer';
import { BaseTable } from '../../../base';


@Entity({ name: 'users' })
export class Users extends BaseTable {
  @Column({ type: 'varchar' })
  firstName: string;

  @Column({ type: 'varchar' })
  lastName: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Exclude()
  @Column({ type: 'text', nullable: true })
  password: string;
}
