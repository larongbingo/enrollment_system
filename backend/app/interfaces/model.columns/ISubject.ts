/**
 * Represents a subject
 */
export interface ISubject {
  /**
   * The unique and short code of the subject
   */
  subjectCode: string;

  /**
   * A short description of the subject
   */
  subjectTitle: string;

  /**
   * Units of the subject
   */
  subjectUnits: number;

  /**
   * A longer description of the subject
   * This column is optional
   */
  subjectDescription?: string;
}
