import { injectable } from "inversify";
import { sign, verify } from "jsonwebtoken";

import { AUTH_CONFIG } from "../config";
import { User } from "../database/models/user";
import { ISessionManager } from "../interfaces/ISessionManager";

@injectable()
export class ArraySessionManager implements ISessionManager {
  private _sessions: string[];

  public async create(details: User): Promise<string> {
    let token = sign({id: details.id}, AUTH_CONFIG.jwt_key);
    this._sessions.push(token);
    return token;
  }  
  public async destroy(token: string): Promise<void> {
    this._sessions.splice(this._sessions.indexOf(token), 1);
  }

  public async verify(token: string): Promise<boolean> {
    if(this._sessions.indexOf(token) === -1) { return false; }
    return true;
  }
}

export default ArraySessionManager;
