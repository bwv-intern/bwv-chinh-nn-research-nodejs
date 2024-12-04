// import {
//   BaseEntity,
//   Column,
//   CreateDateColumn,
//   Entity,
//   PrimaryGeneratedColumn,
//   UpdateDateColumn,
// } from 'typeorm';
// import { IUser } from '~/interfaces/user';

// @Entity()
// export class User extends BaseEntity implements IUser {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   name: string;

//   @Column()
//   phoneNumber: string;

//   @Column()
//   email: string;

//   @Column()
//   age: number;

//   @Column()
//   address: string;

//   @Column()
//   gender: 'MALE' | 'FEMALE';

//   @Column()
//   office: string;

//   @Column()
//   position: string;

//   @Column()
//   startDate: Date;

//   @CreateDateColumn({ name: 'createdAt' })
//   createdAt: Date;

//   @UpdateDateColumn({ name: 'updatedAt' })
//   updatedAt: Date;
// }
