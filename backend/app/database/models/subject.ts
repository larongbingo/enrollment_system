import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
  tableName: "subjects",
  paranoid: true
})
export class Subject extends Model<Subject> {
  @PrimaryKey
  @Column(DataType.STRING)
  public subjectCode: string;

  public subjectTitle: string;
}

export default Subject;
