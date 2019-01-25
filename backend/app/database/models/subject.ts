import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

import { ISubject } from "../../interfaces/model.columns/ISubject";

@Table({
  tableName: "subjects",
  paranoid: true
})
export class Subject extends Model<Subject> implements ISubject {
  @PrimaryKey
  @Column(DataType.STRING)
  public subjectCode: string;

  @Column(DataType.STRING)
  public subjectTitle: string;

  @Column(DataType.STRING)
  public subjectUnits: number;
  
  @Column(DataType.STRING)
  public subjectDescription?: string | undefined;
}

export default Subject;
