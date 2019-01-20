import { inject, injectable } from "inversify";
import { Op } from "sequelize";

import CONSTANTS from "../constants";
import User from "../database/models/user";
import { IDataAccess } from "../interfaces/IDataAccess";
import { IUserValidations } from "../interfaces/IUserValidations";

@injectable()
export class UserValidations implements IUserValidations {
  private _userAccess: IDataAccess<User>;

  constructor(
    @inject(CONSTANTS.dataAccess.User)
    userDataAccess: IDataAccess<User>
  ) {
    this._userAccess = userDataAccess;
  }

  public async isUsernameUnique(username: string): Promise<boolean> {
    if(!username) { return false; }
    let token = await this._userAccess.findAll({where: {username: {[Op.eq]: username}}});
    if(token.length > 0) { return false; }
    return true;
  }

}

export default UserValidations;
