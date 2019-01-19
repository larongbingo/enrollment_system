import { Container } from "inversify";

import CONSTANTS from "./constants";
import { TokenDataAccess, UserDataAccess } from "./data.access";
import Token from "./database/models/token";
import User from "./database/models/user";
import { IAccountRegistry } from "./interfaces/IAccountRegistry";
import { IAuth } from "./interfaces/IAuth";
import { IDataAccess } from "./interfaces/IDataAccess";
import { ISessionManager } from "./interfaces/ISessionManager";
import { IUserValidations } from "./interfaces/IUserValidations";
import AccountRegistry from "./services/AccountRegistry";
import ArraySessionManager from "./services/ArraySessionManager";
import Authentication from "./services/Authentication";
import UserValidations from "./services/UserValidations";

/**
 * Holds the entire dependency graph of the project
 */
export const CONTAINER = new Container();

CONTAINER.bind<IDataAccess<Token>>(CONSTANTS.dataAccess.Token).to(TokenDataAccess).inSingletonScope();
CONTAINER.bind<IDataAccess<User>>(CONSTANTS.dataAccess.User).to(UserDataAccess).inSingletonScope();
CONTAINER.bind<ISessionManager>(CONSTANTS.services.SessionManager).to(ArraySessionManager).inSingletonScope();
CONTAINER.bind<IAuth>(CONSTANTS.services.Authentication).to(Authentication).inSingletonScope();
CONTAINER.bind<IUserValidations>(CONSTANTS.services.UserValidation).to(UserValidations).inSingletonScope();
CONTAINER.bind<IAccountRegistry>(CONSTANTS.services.AccountRegistry).to(AccountRegistry).inSingletonScope();

export default CONTAINER;
