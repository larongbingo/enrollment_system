import { inject } from "inversify";
import { Op } from "sequelize";

import CONSTANTS from "../constants";
import User from "../database/models/user";
import { IDataAccess } from "../interfaces/IDataAccess";
import { IUserValidations } from "../interfaces/IUserValidations";

export class UserValidations implements IUserValidations {
  private _userAccess: IDataAccess<User>;

  constructor(
    @inject(CONSTANTS.dataAccess.User)
    userDataAccess: IDataAccess<User>
  ) {
    this._userAccess = userDataAccess;
  }

  public async isUsernameUnique(username: string): Promise<boolean> {
    if(this._userAccess.findOne({where: {username: {[Op.eq]: username}}})) { return true; }
    return false;
  }

}

export default UserValidations;
