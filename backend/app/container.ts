import { Container } from "inversify";

import CONSTANTS from "./constants";
import { TokenDataAccess, UserDataAccess } from "./data.access";
import Token from "./database/models/token";
import User from "./database/models/user";
import { IAuth } from "./interfaces/IAuth";
import { IDataAccess } from "./interfaces/IDataAccess";
import { ISessionManager } from "./interfaces/ISessionManager";
import SessionManager from "./services/SessionManager";

export const CONTAINER = new Container();

CONTAINER.bind<IDataAccess<Token>>(CONSTANTS.dataAccess.Token).to(TokenDataAccess).inSingletonScope();
CONTAINER.bind<IDataAccess<User>>(CONSTANTS.dataAccess.User).to(UserDataAccess).inSingletonScope();
CONTAINER.bind<ISessionManager>(CONSTANTS.services.SessionManager).to(SessionManager).inSingletonScope();

export default CONTAINER;
