import IUser from "./model.columns/IUser";

export interface IAccountRegistry {
  createUser(details: IUser): Promise<IUser>;
  updateUser(newDetails: IUser, userId: string): Promise<IUser>;
}
