/**
 * Handles the creation and deletion of JWT Session strings
 */
export interface IAuth {
  /**
   * Creates a new JWT Session string if the given credentials
   * are valid
   * @param username The identifier of the account
   * @param password The secret of the account
   */
  logIn(username: string, password: string): Promise<string | null>;
  
  /**
   * Destroys the given JWT Session string
   * @param token The JWT Session string that needs to be destroyed
   */
  logOut(token: string): Promise<void>;
}
