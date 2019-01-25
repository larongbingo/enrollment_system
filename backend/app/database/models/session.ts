import { Column, DataType, Model, Table } from "sequelize-typescript";

import { ISession } from "../../interfaces/model.columns/ISession";

@Table({
  tableName: "sessions",
  paranoid: true
})
export class Session extends Model<Session> implements ISession {
  @Column(DataType.INTEGER)
  public timeStart: number;
  
  @Column(DataType.INTEGER)
  public timeEnd: number;

  @Column(DataType.STRING)
  public sessionType: string;
}

export default Session;
