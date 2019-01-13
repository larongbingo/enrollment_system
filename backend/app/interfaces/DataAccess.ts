import { Model, ICreateOptions, IFindOptions } from 'sequelize-typescript';
import { FilteredModelAttributes } from 'sequelize-typescript/lib/models/Model';

export interface DataAccess<T extends Model<T>> {
  create(values?: FilteredModelAttributes<T>, options?: ICreateOptions): Promise<T>;
  findOne(options?: IFindOptions<T>): Promise<T | null>;
  findAll(options?: IFindOptions<T>): Promise<T[]>;
}
