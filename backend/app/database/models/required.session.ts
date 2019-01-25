import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

import { IRequiredSession } from "../../interfaces/model.columns/IRequiredSession";

import Subject from "./subject";

@Table({
  tableName: "requiredSessions",
  paranoid: true
})
export class RequiredSession extends Model<RequiredSession> implements IRequiredSession {
  @Column(DataType.STRING)
  public sessionType: string;

  @Column(DataType.STRING)
  public requiredTimeLength: number;

  @ForeignKey(() => Subject)
  @Column(DataType.STRING)
  public subjectCode: string;

  @BelongsTo(() => Subject)
  public subject: Subject;
}

export default RequiredSession;
