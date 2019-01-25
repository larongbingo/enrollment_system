import { Column, DataType, Model, Table } from "sequelize-typescript";

import { IRoom } from "../../interfaces/model.columns/IRoom";

@Table({
  tableName: "rooms",
  paranoid: true
})
export class Room extends Model<Room> implements IRoom {
  @Column(DataType.STRING)
  public roomCode: string;
  
  @Column(DataType.STRING)
  public roomName: string;

  @Column(DataType.TEXT)
  public roomDescription?: string | undefined;
  
  @Column(DataType.TEXT)
  public roomAddress?: string | undefined;
}
