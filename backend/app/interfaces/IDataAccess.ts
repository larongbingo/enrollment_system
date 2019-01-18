import { ICreateOptions, IFindOptions, Model } from "sequelize-typescript";
// tslint:disable-next-line:no-submodule-imports
import { FilteredModelAttributes } from "sequelize-typescript/lib/models/Model";

/**
 * A repository interface; to allow static methods of SequelizeTypescript.Model
 * to be injected
 */
export interface IDataAccess<T extends Model<T>> {
  /**
   * Creates a new instance of the Model
   * @param values The details of the new instance
   * @param options Parameters when creating the instance
   */
  create(values?: FilteredModelAttributes<T>, options?: ICreateOptions): Promise<T>;
  
  /**
   * Finds ONE instance in the model's table
   * @param options Parameters when finding the an instance
   */
  findOne(options?: IFindOptions<T>): Promise<T | null>;

  /**
   * Finds all instances that matches the given parameters
   * @param options Parameters when find a number of instances
   * @returns An empty array if there are no matches
   */
  findAll(options?: IFindOptions<T>): Promise<T[]>;
}
