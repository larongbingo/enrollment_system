/**
 * Pre registration validations
 */
export interface IUserValidations {

  /**
   * Checks if the given username is unique
   * @param username The username that needs to be checked
   * @returns True if unique; false otherwise
   */
  isUsernameUnique(username: string): Promise<boolean>;
  
}
