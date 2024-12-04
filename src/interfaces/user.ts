export interface IUser {
  id: number;
  name: string;
  age: number;
  address: string;
  gender: 'MALE' | 'FEMALE';
  office: string;
  position: string;
  startDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
