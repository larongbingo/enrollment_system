import { compare, hash } from "bcrypt";
import { generate } from "randomstring";
import { BeforeCreate, BeforeUpdate, Column, 
  DataType, HasOne, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";

import { AUTH_CONFIG } from "../../config";
import { IUser } from "../../interfaces/model.columns/IUser";

import UserDetails from "./user.details";

/**
 * Credentials of the user
 */
@Table({
  tableName: "users",
  paranoid: true
})
export class User extends Model<User> implements IUser {
  /**
   * Generates unique IDs to new users
   */
  @BeforeCreate
  private static async generateID(instance: User) {
    instance.id = `${new Date().getFullYear()}${generate({ charset: "numeric", length: 10 })}`;
  }

  /**
   * Hashes the plain text to bcrypt hash
   */
  @BeforeCreate
  @BeforeUpdate
  private static async hashPassword(instance: User) {
    instance.password = await hash(instance.password, 12);
  }

  /**
   * Unique identifier
   */
  @PrimaryKey
  @Column(DataType.STRING)
  public id: string;

  /**
   * Account Identifier; used to identify the account
   */
  @Unique
  @Column(DataType.STRING)
  public username: string;

  /**
   * Account Secret; used to verify the ownership of the account
   */
  @Column(DataType.STRING)
  public password: string;

  @HasOne(() => UserDetails)
  public details: UserDetails;

  /**
   * Checks if the given plain text matches the stored hash
   * @param plain The plain text password
   * @returns {Promise<boolean>} Returns true if the plain text is correct or match;
   * false otherwise
   */
  public async checkPassword(plain: string) {
    return compare(plain, this.password);
  }
}

export default User;
