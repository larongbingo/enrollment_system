import { inject, injectable } from "inversify";
import { Op } from "sequelize";

import CONSTANTS from "../constants";
import User from "../database/models/user";
import UserDetails from "../database/models/user.details";
import { IAccountRegistry } from "../interfaces/IAccountRegistry";
import { IDataAccess } from "../interfaces/IDataAccess";
import { IUserValidations } from "../interfaces/IUserValidations";
import { IUser } from "../interfaces/model.columns/IUser";
import { IUserDetails } from "../interfaces/model.columns/IUserDetails";

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
      Object.keys(newDetails).forEach((key) => user[key] = newDetails[key]);
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

  public async createPersonalDetails(personalDetails: IUserDetails, userId: string): Promise<boolean> {
    if(!personalDetails || !userId) { return false; }
    try {
      let user = await this._userAccess.findOne({where: {id: {[Op.eq]: userId}}});
      if(!user) { return false; }

      {
        let details = await user!.$get<UserDetails>("details");
        if(details) { return false; }
      }

      user!.$create<UserDetails>("details", personalDetails);
    }
    catch(err) { return false; }
    return true;
  }
  
  public async updatePersonalDetails(newDetails: IUserDetails, userId: string): Promise<IUserDetails | null> {
    if(!newDetails || !userId) { return null; }
    let details: UserDetails;
    try {
      let user = await this._userAccess.findOne({where: {id: {[Op.eq]: userId}}});
      if(!user) { return null; }

      details = await user!.$get<UserDetails>("details") as UserDetails;
      if(!details) { return null; }
      
      // @ts-ignore
      Object.keys(newDetails).forEach((key) => details[key] = newDetails[key]);
      await details.save();
    }
    catch(err) { return null; }
    return details;
  }
}

export default AccountRegistry;
