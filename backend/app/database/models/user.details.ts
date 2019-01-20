import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

import { IUserDetails } from "../../interfaces/model.columns/IUserDetails";

import User from "./user";

@Table({
  tableName: "userDetails",
  paranoid: true
})
export class UserDetails extends Model<UserDetails> implements IUserDetails {
  @ForeignKey(() => User)
  @Column(DataType.STRING)
  public userId: string;

  @Column(DataType.STRING)
  public firstName: string;  
  
  @Column(DataType.STRING)
  public lastName: string;

}

export default UserDetails;
