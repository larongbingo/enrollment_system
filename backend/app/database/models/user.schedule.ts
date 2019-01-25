import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

import Schedule from "./schedule";
import User from "./user";

@Table({
  tableName: "userSchedules",
  paranoid: true
})
export class UserSchedule extends Model<UserSchedule> {
  @ForeignKey(() => User)
  @Column(DataType.STRING)
  public userId: string;

  @ForeignKey(() => Schedule)
  @Column(DataType.STRING)
  public scheduleCode: string;
}

export default UserSchedule;
