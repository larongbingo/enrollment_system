import { Model, Table, Column, DataType } from 'sequelize-typescript';
import { IUser } from '../../types';

@Table({
  tableName: 'users',
  paranoid: true
})
export class User extends Model<User> implements IUser {
  @Column(DataType.STRING)
  username: string;

  @Column(DataType.STRING)
  password: string;
}

export default User;
