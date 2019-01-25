/**
 * Represents the required session in a subject
 */
export interface IRequiredSession {
  /**
   * The type of the meet (Lecture or Laboratory)
   */
  sessionType: string;
  
  /**
   * How long the session should last (in terms of hours)
   */
  requiredTimeLength: number;

  /**
   * Foreign Key to Subject Model
   */
  subjectCode: string;
}
