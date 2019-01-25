import { generate } from "randomstring";
import { BeforeCreate, BelongsToMany, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

import { ISchedule } from "../../interfaces/model.columns/ISchedule";

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

  @BelongsToMany(() => User, () => UserSchedule)
  public students: User[];

  @BeforeCreate
  private async generateID(instance: Schedule) {
    instance.scheduleCode = `${new Date().getFullYear()}${generate({ charset: "numeric", length: 11 })}`;
  }
}

export default Schedule;
