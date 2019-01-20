import deprecated from "deprecated-decorator";
import { injectable } from "inversify";
import { ICreateOptions, IFindOptions } from "sequelize-typescript";
// tslint:disable-next-line:no-submodule-imports
import { FilteredModelAttributes } from "sequelize-typescript/lib/models/Model";

import Token from "./database/models/token";
import User from "./database/models/user";
import UserDetails from "./database/models/user.details";
import { IDataAccess } from "./interfaces/IDataAccess";

// tslint:disable:max-classes-per-file

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

/**
 * @deprecated
 */
@deprecated()
@injectable()
export class TokenDataAccess implements IDataAccess<Token> {
  public async create(values?: FilteredModelAttributes<Token>, options?: ICreateOptions) {
    return Token.create(values, options);
  }

  public async findOne(options?: IFindOptions<Token>) {
    return Token.findOne(options);
  }

  public async findAll(options?: IFindOptions<Token>) {
    return Token.findAll(options);
  }
}

export class UserDetailsDataAccess implements IDataAccess<UserDetails> {
  public async create(values?: FilteredModelAttributes<UserDetails>, options?: ICreateOptions): Promise<UserDetails> {
    return UserDetails.create(values, options);
  }  
  
  public async findOne(options?: IFindOptions<UserDetails> | undefined): Promise<UserDetails | null> {
    return UserDetails.findOne(options);
  }
  public async findAll(options?: IFindOptions<UserDetails> | undefined): Promise<UserDetails[]> {
    return UserDetails.findAll(options);
  }
}
