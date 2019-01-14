import { User } from "../database/models/user";

/**
 * Manages creation and deletion of JWT Session keys
 */
export interface ISessionManager {
  create(details: User): Promise<string>;
  destroy(token: string): Promise<void>;
  verify(token: string): Promise<boolean>;
}
