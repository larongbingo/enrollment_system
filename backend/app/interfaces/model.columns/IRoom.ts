/**
 * Dictates a rooms
 */
export interface IRoom {
  /**
   * A short and unique code of the room
   */
  roomCode: string;

  /**
   * A long and descriptive name of the room
   */
  roomName: string;

  /**
   * A longer description of the room
   * This column is optional
   */
  roomDescription?: string;

  /**
   * The address that points to the room
   * This column is optional
   */
  roomAddress?: string;
}
