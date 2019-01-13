import { hash } from "bcrypt";
import { generate } from "randomstring";
import { BeforeCreate, BeforeUpdate, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

import { AUTH_CONFIG } from "../../config";
import { IUser } from "../../interfaces/model.columns/IUser";

@Table({
  tableName: "users",
  paranoid: true
})
export class User extends Model<User> implements IUser {

  @BeforeCreate
  private static async generateID(instance: User) {
    instance.id = `${new Date().getFullYear()}${generate({ charset: "numeric", length: 10 })}`;
  }

  @BeforeCreate
  @BeforeUpdate
  private static async hashPassword(instance: User) {
    instance.password = await hash(instance.password, AUTH_CONFIG.bcrypt_secret);
  }
  @PrimaryKey
  @Column(DataType.STRING)
  public id: string;

  @Column(DataType.STRING)
  public username: string;

  @Column(DataType.STRING)
  public password: string;
}

export default User;
