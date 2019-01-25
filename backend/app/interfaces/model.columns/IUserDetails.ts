/**
 * Represents the personal details of the user
 */
export interface IUserDetails {
  /**
   * Foreign Key to User model
   * The id of the user
   */
  userId: string;

  /**
   * First name of the user
   */
  firstName: string;

  /**
   * Last name of the user
   */
  lastName: string;
}
