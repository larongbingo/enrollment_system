import { IUser } from "./model.columns/IUser";

/**
 * Handles update and creation of users
 */
export interface IAccountRegistry {
  /**
   * Creates a new user
   * @param details The details for the new user
   * @returns Returns an instance of IUser if the user is created; null otherwise
   */
  createUser(details: IUser): Promise<IUser | null>;
  
  /**
   * Updates the user using the id 
   * @param newDetails The new details of the user
   * @param userId The id of the user
   * @returns Returns an instance of IUser if everything is valid; null otherwise
   */
  updateUser(newDetails: IUser, userId: string): Promise<IUser | null>;

  /**
   * Marks the user as deleted and revokes access to the details and data associated with the user
   * @param userId The id of the user that needs to be deleted
   * @returns Returns true if user was marked as deleted; false otherwise
   */
  deleteUser(userId: string): Promise<boolean>;
}
