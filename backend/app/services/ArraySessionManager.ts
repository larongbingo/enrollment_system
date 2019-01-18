import { injectable } from "inversify";
import { sign, verify } from "jsonwebtoken";

import { AUTH_CONFIG } from "../config";
import { User } from "../database/models/user";
import { ISessionManager } from "../interfaces/ISessionManager";

/**
 * Uses an array to store all of the given Session strings
 */
@injectable()
export class ArraySessionManager implements ISessionManager {
  private _sessions: string[] = [];

  public async createToken(details: User): Promise<string | null> {
    if(!details) { return null; }
    let token = sign({id: details.id}, AUTH_CONFIG.jwt_key);
    this._sessions.push(token);
    return token;
  }  
  public async destroyToken(token: string): Promise<void> {
    this._sessions = this._sessions.splice(this._sessions.indexOf(token), 1);
  }

  public async verifyToken(token: string): Promise<boolean> {
    if(this._sessions.indexOf(token) === -1) { return false; }
    return true;
  }
}

export default ArraySessionManager;
