import { User } from "../database/models/user";

/**
 * Manages creation and deletion of JWT Session keys
 */
export interface ISessionManager {
  createToken(details: User): Promise<string>;
  destroyToken(token: string): Promise<void>;
  verifyToken(token: string): Promise<boolean>;
}
