import { injectable } from "inversify";
import { ICreateOptions, IFindOptions } from "sequelize-typescript";
// tslint:disable-next-line:no-submodule-imports
import { FilteredModelAttributes } from "sequelize-typescript/lib/models/Model";

import User from "./database/models/user";
import { IDataAccess } from "./interfaces/IDataAccess";

@injectable()
export class UserDataAccess implements IDataAccess<User> {
  public async create(values?: FilteredModelAttributes<User>, options?: ICreateOptions) {
    return User.create(values, options);
  }

  public async findOne(options?: IFindOptions<User>) {
    return User.findOne(options);
  }

  public async findAll(options?: IFindOptions<User>) {
    return User.findAll(options);
  }
}
