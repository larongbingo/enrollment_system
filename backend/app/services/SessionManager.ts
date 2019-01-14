import { EventEmitter } from "events";
import { inject, injectable } from "inversify";
import { sign, verify } from "jsonwebtoken";
import { Op } from "sequelize";

import { AUTH_CONFIG } from "../config";
import { CONSTANTS } from "../constants";
import { Token } from "../database/models/token";
import { User } from "../database/models/user";
import { IDataAccess } from "../interfaces/IDataAccess";
import { ISessionManager } from "../interfaces/ISessionManager";

@injectable()
export class SessionManager extends EventEmitter implements ISessionManager {
  private _tokenAccess: IDataAccess<Token>;

  constructor(
    @inject(CONSTANTS.dataAccess.Token)
    tokenDataAccess: IDataAccess<Token>
  ) {
    super();
    this._tokenAccess = tokenDataAccess;
    this.on("store", (token: string, userId) => this._tokenAccess.create({token, userId}));
    this.on("delete", async (token: string) => {
      let tokenInstance = await this._tokenAccess.findOne({where: {token: {[Op.eq]: token}}});
      if(tokenInstance) { tokenInstance.destroy(); }
    });
  }
  
  public async create(details: User): Promise<string> {
    let token = sign({id: details.id}, AUTH_CONFIG.jwt_key);
    this.emit("store", token, details.id);
    return token;
  }

  public async destroy(token: string): Promise<void> {
    this.emit("delete", token);
  }

  public async verify(token: string): Promise<boolean> {
    try { 
      verify(token, AUTH_CONFIG.jwt_key);
      if(!await this._tokenAccess.findOne({where: {token: {[Op.eq]: token}}})) { return false; }
    }
    catch(err) { return false; }
    return true;
  }

}

export default SessionManager;
