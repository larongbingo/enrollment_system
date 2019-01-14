import { inject, injectable } from "inversify";
import { Op } from "sequelize";

import CONSTANTS from "../constants";
import User from "../database/models/user";
import { IAuth } from "../interfaces/IAuth";
import { IDataAccess } from "../interfaces/IDataAccess";
import { ISessionManager } from "../interfaces/ISessionManager";

@injectable()
export class Authentication implements IAuth {
  private _users: IDataAccess<User>;
  private _sessionManager: ISessionManager;

  constructor(
    @inject(CONSTANTS.dataAccess.User)
    userDataAccess: IDataAccess<User>,

    @inject(CONSTANTS.services.SessionManager)
    sessionManager: ISessionManager,
  ) {
    this._users = userDataAccess;
    this._sessionManager = sessionManager;
  }

  public async logIn(username: string, password: string): Promise<string | null> {
    let user: User | null = null;
    try {
      user = await this._users.findOne({where: {username: {[Op.eq]: username}}});
      if(!user || !await user.checkPassword(password)) { return null; }
    }
    catch(err) { return null; }
    return this._sessionManager.create(user);
  }

  public async logOut(token: string) {
    this._sessionManager.destroy(token);
  }
}

export default Authentication;
