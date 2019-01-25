/**
 * Represents a section of time in a given day
 */
export interface ISchedule {
  /**
   * A unique identifier of the schedule
   */
  scheduleCode: string;

  /**
   * Foreign Key to AcademicTime
   */
  academicTimeID: number;
}
