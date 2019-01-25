/**
 * Represents a meetup of the students and professors
 */
export interface ISession {
  /**
   * The time the meet starts
   * 
   * This is in 24 hours
   */
  timeStart: number;

  /**
   * The time the meet ends
   * 
   * This is in 24 hours
   */
  timeEnd: number;

  /**
   * The type of the meet (Lecture or Laboratory)
   */
  sessionType: string;
}
