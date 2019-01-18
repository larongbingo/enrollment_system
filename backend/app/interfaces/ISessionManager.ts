import IUser from "./model.columns/IUser";

/**
 * Manages creation and deletion of JWT Session keys
 */
export interface ISessionManager {
  createToken(details: IUser): Promise<string | null>;
  destroyToken(token: string): Promise<void>;
  verifyToken(token: string): Promise<boolean>;
}
