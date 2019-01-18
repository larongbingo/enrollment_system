import { deprecated } from "deprecated-decorator";
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

import { IToken } from "../../interfaces/model.columns/IToken";

import { User } from "./user";

/**
 * JWT Session Key
 * @deprecated
 */
@deprecated()
@Table({
  tableName: "tokens",
  paranoid: true
})
export class Token extends Model<Token> implements IToken {

  /**
   * The actual JWT Session string
   */
  @Column(DataType.STRING)
  public token: string;

  /**
   * Id of the user that owns this session string
   */
  @ForeignKey(() => User)
  @Column(DataType.STRING)
  public userId?: string;
}

export default Token;
