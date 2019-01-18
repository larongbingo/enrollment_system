/**
 * Represents the credentials of the user
 */
export interface IUser {
  /**
   * Unique identifier
   */
  id?: string;
  
  /**
   * Account Identifier; used to identify the account
   */
  username: string;
  
  /**
   * Account Secret; used to verify the ownership of the account
   */
  password: string;
}
