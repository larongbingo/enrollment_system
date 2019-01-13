import { ICreateOptions, IFindOptions, Model } from "sequelize-typescript";
// tslint:disable-next-line:no-submodule-imports
import { FilteredModelAttributes } from "sequelize-typescript/lib/models/Model";

export interface IDataAccess<T extends Model<T>> {
  create(values?: FilteredModelAttributes<T>, options?: ICreateOptions): Promise<T>;
  findOne(options?: IFindOptions<T>): Promise<T | null>;
  findAll(options?: IFindOptions<T>): Promise<T[]>;
}
