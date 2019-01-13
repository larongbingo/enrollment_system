import { Model, Table, Column, DataType, PrimaryKey, BeforeCreate, BeforeUpdate } from 'sequelize-typescript';
import { generate } from 'randomstring';
import { hash } from 'bcrypt';
import { IUser } from '../../interfaces/model.columns/IUser';
import { AUTH_CONFIG } from '../../config';

@Table({
  tableName: 'users',
  paranoid: true
})
export class User extends Model<User> implements IUser {
  @PrimaryKey
  @Column(DataType.STRING)
  id: string;

  @Column(DataType.STRING)
  username: string;

  @Column(DataType.STRING)
  password: string;

  @BeforeCreate
  private static async generateID(instance: User) {
    instance.id = `${new Date().getFullYear()}${generate({ charset: 'numeric', length: 10 })}`;
  }

  @BeforeCreate
  @BeforeUpdate
  private static async hashPassword(instance: User) {
    instance.password = await hash(instance.password, AUTH_CONFIG.bcrypt_secret);
  }
}

export default User;
