import { Column, DataType, Model, Table } from "sequelize-typescript";

import { IAcademicTime } from "../../interfaces/model.columns/IAcademicTime";

@Table({
  tableName: "academicTimes",
  paranoid: true
})
export class AcademicTime extends Model<AcademicTime> implements IAcademicTime {
  @Column(DataType.STRING)
  public semester: string;

  @Column(DataType.STRING)
  public academicYear: string;
}

export default AcademicTime;
