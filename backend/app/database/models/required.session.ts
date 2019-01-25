import { Column, DataType, Model, Table } from "sequelize-typescript";

import { IRequiredSession } from "../../interfaces/model.columns/IRequiredSession";

@Table({
  tableName: "requiredSessions",
  paranoid: true
})
export class RequiredSession extends Model<RequiredSession> implements IRequiredSession {
  @Column(DataType.STRING)
  public sessionType: string;

  @Column(DataType.STRING)
  public requiredTimeLength: number;

}

export default RequiredSession;
