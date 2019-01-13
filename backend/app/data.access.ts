import { FilteredModelAttributes, Model } from 'sequelize-typescript/lib/models/Model';
import { IFindOptions, ICreateOptions } from 'sequelize-typescript';
import { injectable } from 'inversify';
import { DataAccess } from './interfaces/DataAccess';
import User from './database/models/user';

@injectable()
export class UserDataAccess implements DataAccess<User> {
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
