export interface IUser {
  id: number;
  name: string;
  age: number;
  address: string;
  gender: 'MALE' | 'FEMALE';
  position: string;
  office: string;
  startDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
