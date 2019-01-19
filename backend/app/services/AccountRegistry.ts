import { inject, injectable } from "inversify";
import { Op } from "sequelize";

import CONSTANTS from "../constants";
import User from "../database/models/user";
import { IAccountRegistry } from "../interfaces/IAccountRegistry";
import { IDataAccess } from "../interfaces/IDataAccess";
import { IUserValidations } from "../interfaces/IUserValidations";
import { IUser } from "../interfaces/model.columns/IUser";

@injectable()
export class AccountRegistry implements IAccountRegistry {
  private _userAccess: IDataAccess<User>;
  private _userValidation: IUserValidations;

  constructor(
    @inject(CONSTANTS.dataAccess.User)
    userDataAccess: IDataAccess<User>,

    @inject(CONSTANTS.services.UserValidation)
    userValidation: IUserValidations
  ) {
    this._userAccess = userDataAccess;
    this._userValidation = userValidation;
  }

  public async createUser(details: IUser): Promise<IUser | null> {
    if(!await this._userValidation.isUsernameUnique(details.username)) { return null; }
    return this._userAccess.create(details);
  }  
  
  public async updateUser(newDetails: IUser, userId: string): Promise<IUser | null> {
    let user: User | null;
    try {
      user = await this._userAccess.findOne({where: {id: {[Op.eq]: userId}}});
      if(!user) { return null; }
      // @ts-ignore
      Object.keys(newDetails).forEach((key) => (newDetails[key]) ?  user[key] = newDetails[key] : null);
      await user.save();
    }
    catch(err) { return null; }

    return user;
  }

  public async deleteUser(userId: string): Promise<boolean> {
    let user: User | null;
    try {
      user = await this._userAccess.findOne({where: {id: {[Op.eq]: userId}}});
      if(!user) { return false; }
      await user!.destroy();
    }
    catch(err) { return false; }
    return true;
  }
}

export default AccountRegistry;
