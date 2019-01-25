import { generate } from "randomstring";
import { BeforeCreate, BelongsTo, 
  BelongsToMany, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";

import { ISchedule } from "../../interfaces/model.columns/ISchedule";

import AcademicTime from "./academic.time";
import User from "./user";
import UserSchedule from "./user.schedule";

@Table({
  tableName: "schedules",
  paranoid: true
})
export class Schedule extends Model<Schedule> implements ISchedule {
  @PrimaryKey
  @Column(DataType.STRING)
  public scheduleCode: string;

  @ForeignKey(() => AcademicTime)
  @Column(DataType.INTEGER)
  public academicTimeID: number;

  @BelongsToMany(() => User, () => UserSchedule)
  public students: User[];

  @BelongsTo(() => AcademicTime)
  public academicTime: AcademicTime;

  @BeforeCreate
  private async generateID(instance: Schedule) {
    instance.scheduleCode = `${new Date().getFullYear()}${generate({ charset: "numeric", length: 11 })}`;
  }
}

export default Schedule;
