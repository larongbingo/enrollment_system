import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";

import { IAcademicTime } from "../../interfaces/model.columns/IAcademicTime";

import Schedule from "./schedule";

@Table({
  tableName: "academicTimes",
  paranoid: true
})
export class AcademicTime extends Model<AcademicTime> implements IAcademicTime {
  @Column(DataType.STRING)
  public semester: string;

  @Column(DataType.STRING)
  public academicYear: string;

  @HasMany(() => Schedule)
  public schedules: Schedule[];
}

export default AcademicTime;
