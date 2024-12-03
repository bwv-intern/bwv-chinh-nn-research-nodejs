import { IsNotEmpty } from 'class-validator';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IUser } from '~/interfaces/user';

@Entity()
export class User extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @IsNotEmpty()
  name!: string;

  @Column()
  @IsNotEmpty()
  age!: number;

  @Column()
  @IsNotEmpty()
  address!: string;

  @Column()
  @IsNotEmpty()
  gender!: 'MALE' | 'FEMALE';

  @Column()
  @IsNotEmpty()
  office!: string;

  @Column()
  @IsNotEmpty()
  position!: string;

  @Column()
  @IsNotEmpty()
  startDate!: Date;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt!: Date;

  //   constructor({
  //     name,
  //     age,
  //     address,
  //     gender,
  //     office,
  //     position,
  //     startDate,
  //   }: IUser) {
  //     this.name = name;
  //     this.age = age;
  //     this.address = address;
  //     this.gender = gender;
  //     this.office = office;
  //     this.position = position;
  //     this.startDate = startDate;
  //   }
}
