import { IUser } from "./model.columns/IUser";

/**
 * Handles update and creation of users
 */
export interface IAccountRegistry {
  /**
   * Creates a new user
   * @param details The details for the new user
   */
  createUser(details: IUser): Promise<IUser>;
  
  /**
   * Updates the user using the id 
   * @param newDetails The new details of the user
   * @param userId The id of the user
   */
  updateUser(newDetails: IUser, userId: string): Promise<IUser>;
}
