import { IUser } from "./model.columns/IUser";

/**
 * Manages creation and deletion of JWT Session keys
 */
export interface ISessionManager {
  /**
   * Creates a new JWT Session key
   * @param details The details of a user
   */
  createToken(details: IUser): Promise<string | null>;
  
  /**
   * Destroys the given Session key and marks it as an invalid 
   * Session key
   * @param token The JWT Session key that needs to be destroyed
   */
  destroyToken(token: string): Promise<void>;
  
  /**
   * Checks if the given Session is valid or not
   * @param token The JWT Session key that needs to be checked
   * @returns True if the given string is valid; false otherwise
   */
  verifyToken(token: string): Promise<boolean>;
}
